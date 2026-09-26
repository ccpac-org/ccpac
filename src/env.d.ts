/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly GOOGLE_SCRIPT_URL: string;
	readonly GOOGLE_SCRIPT_SECRET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}