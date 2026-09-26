import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";
import { z } from "zod";

export const prerender = false;

const applicationSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  hscYear: z.enum(["HSC 2027", "HSC 2028"]),
  section: z.enum(["A", "B", "C", "D", "E", "F", "G"]),
  roll: z
    .string()
    .trim()
    .regex(/^(1202526|1202627)\d{6}$/),
  whatsapp: z
    .string()
    .trim()
    .regex(/^01\d{9}$/),
  skills: z.array(z.string().trim().min(1)).min(1).max(20),
  skillDetails: z.string().trim().max(2000).optional(),
  olympiad: z.string().trim().max(2000).optional(),
  pastClub: z.string().trim().min(1).max(2000),
  whyJoin: z.string().trim().min(10).max(4000),
  website: z.string().optional(),
});

const transactionSchema = z.object({
  action: z.literal("updateTransactionId"),
  applicationId: z.string().uuid(),
  transactionId: z
    .string()
    .trim()
    .regex(/^[A-Za-z0-9]{8,20}$/),
});

type ForwardPayload = Record<string, unknown>;

function sanitizeInput(value: string | undefined): string {
  const cleanValue = value?.trim() ?? "";
  return /^[=+\-@]/.test(cleanValue) ? `'${cleanValue}` : cleanValue;
}

function getClientIp(request: Request, clientAddress?: string): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return (
    clientAddress?.trim() ||
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "Unknown"
  );
}

function getScriptUrl(): string {
  const scriptUrl = getSecret("GOOGLE_SCRIPT_URL");
  if (!scriptUrl) {
    throw new Error("GOOGLE_SCRIPT_URL is not configured.");
  }
  return scriptUrl;
}

async function forwardToGoogleScript(
  payload: ForwardPayload,
): Promise<Response> {
  const upstreamResponse = await fetch(getScriptUrl(), {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const responseText = await upstreamResponse.text();
  let responseBody: unknown;
  try {
    responseBody = JSON.parse(responseText);
  } catch {
    responseBody = {
      ok: false,
      error: "Invalid response from membership service.",
    };
  }

  return new Response(JSON.stringify(responseBody), {
    status: upstreamResponse.ok ? 200 : 502,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const body: unknown = await request.json();

    if (
      typeof body === "object" &&
      body !== null &&
      "action" in body &&
      body.action === "updateTransactionId"
    ) {
      const transaction = transactionSchema.parse(body);
      return forwardToGoogleScript({
        action: transaction.action,
        applicationId: transaction.applicationId,
        transactionId: sanitizeInput(transaction.transactionId).toUpperCase(),
        _timestamp: Date.now(),
      });
    }

    const application = applicationSchema.parse(body);
    if (application.website) {
      return new Response(
        JSON.stringify({ ok: true, applicationId: crypto.randomUUID() }),
        {
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const applicationId = crypto.randomUUID();
    const timestamp = Date.now();
    const secret =
      getSecret("GOOGLE_SCRIPT_SECRET") || "ccpac_secure_submit_v1";
    const sanitizedApplication = {
      applicationId,
      name: sanitizeInput(application.name),
      email: sanitizeInput(application.email),
      hscYear: sanitizeInput(application.hscYear),
      section: sanitizeInput(application.section),
      roll: sanitizeInput(application.roll),
      whatsapp: sanitizeInput(application.whatsapp),
      skills: application.skills.map(sanitizeInput).join(", "),
      skillDetails: sanitizeInput(application.skillDetails),
      olympiad: sanitizeInput(application.olympiad),
      pastClub: sanitizeInput(application.pastClub),
      whyJoin: sanitizeInput(application.whyJoin),
    };
    const tokenData = new TextEncoder().encode(
      `${JSON.stringify(sanitizedApplication)}:${timestamp}:${secret}`,
    );
    const tokenBytes = await crypto.subtle.digest("SHA-256", tokenData);
    const token = Array.from(new Uint8Array(tokenBytes), (byte) =>
      byte.toString(16).padStart(2, "0"),
    ).join("");

    return forwardToGoogleScript({
      ...sanitizedApplication,
      ipAddress: sanitizeInput(getClientIp(request, clientAddress)),
      _timestamp: timestamp,
      _nonce: crypto.randomUUID().slice(0, 8),
      _token: token,
    });
  } catch (error) {
    const message =
      error instanceof z.ZodError
        ? "Invalid membership request."
        : error instanceof Error
          ? error.message
          : "Unable to process membership request.";
    const status = message.includes("not configured") ? 503 : 400;
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  }
};
