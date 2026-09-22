export interface UpdateItem {
  id: string;
  tag: string;
  title: string;
  date: string;
  images: string[];
  content: string;
}

export const updatesData: Record<string, UpdateItem> = {
  "1": {
    id: "1",
    tag: "Executive Committee Announcement",
    title: "Official Announcement of the Executive Committee 2026-27",
    date: "Date: 19-09-2026",
    images: ["/images/ec2627-1.jpeg", "/images/ec2627-2.jpeg"],
    content: `The dictation of physical laws remains precise in the conversion of energy through processes. As one chapter closes and the wheel keeps turning, the process of shifting begins.
Part of the process, the passion and dedication is being handed over towards the new mindset and leadership of Chittagong College Physics & Astronomy Club.

The Chittagong College Physics & Astronomy Club pulls off the curtains from suspense and officially announces the Executive Committee 2026-27, effective from today. We extend our heartiest congratulations and warmest wishes to all the members, taking charge of their new positions and assignments.

May this new committee soar to greater heights, igniting curiosity and spreading a deeper love for the laws of nature. We hope that this team will carry the club's legacy, identity, and purpose forward with immense responsibility, vision, and leadership.`,
  },
  "2": {
    id: "2",
    tag: "International Achievement",
    title: "Our Raihan shines bright with the Silver Medal at the 67th IMO!",
    date: "Date: 20-07-2026",
    images: ["/images/silver.jpeg"],
    content: `The Chittagong College Physics and Astronomy Club (CCPAC) is filled with immense pride and joy to share that, at the 67th International Mathematical Olympiad (IMO) 2026 held in China, Chittagong College student Md. Raihan Siddiquee has clinched a Silver Medal, scoring 23 out of 42. After earning an Honorable Mention at the 66th IMO in Sunshine Coast, Australia, last year, he has reached new heights of success.`,
  },
  "3": {
    id: "3",
    tag: "Appreciation & Recognition",
    title:
      "Tokens of Honour Conferred upon Honorable Principal, Vice Principal, and Moderator",
    date: "Date: 29-03-2026",
    images: ["/images/h1.jpeg", "/images/h2.jpeg", "/images/h3.jpeg"],
    content: `Today, on behalf of the Executive Panel 2025–26 of Chittagong College Physics & Astronomy Club (CCPAC), tokens of honour were conferred upon Principal Prof. Mohammad Mozahidul Islam Chowdhury, Vice Principal Md. Shawkat Iqbal Faruquee, and Moderator Md. Zahirul Islam in sincere recognition of their unwavering support.`,
  },
  "4": {
    id: "4",
    tag: "College Administration",
    title:
      "Congratulating Md. Shawkat Iqbal Faruquee on his appointment as Vice Principal",
    date: "Date: 11-01-2026",
    images: ["/images/vp.jpeg"],
    content: `Today, Chittagong College Physics & Astronomy Club warmly congratulated Md. Shawkat Iqbal Faruquee on his appointment as the new Vice Principal of Chittagong College.`,
  },
};
