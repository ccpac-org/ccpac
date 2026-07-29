export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Developer {
  id: string;
  name: string;
  role: string;
  avatar: string;
  batch: string;
  techStack: string[];
  contributions: string[];
  // socials: SocialLink[];
  featured?: boolean;
}

export const developersData: Developer[] = [
  {
    id: "1",
    name: "Sajjad Hossain Sakib",
    role: "Frontend & Content Engineer",
    avatar: "/images/shs.jpeg",
    batch: "HSC 2024-25",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    contributions: [
      "Architected the original CCPAC web platform",
      "Designed initial interactive UI components, modals",
      "Set the standard for future developers"
    ],
    // socials: [
    //   {
    //     platform: "Facebook",
    //     url: "https://www.facebook.com/ccpacofficial",
    //     icon: "fa-brands fa-facebook-f",
    //   },
    //   {
    //     platform: "Instagram",
    //     url: "https://www.instagram.com/ccpac.official",
    //     icon: "fa-brands fa-instagram",
    //   },
    // ],
    // featured: false,
  },
  {
    id: "2",
    name: "Farhan Ahmad",
    role: "Lead Full-Stack & UI/UX Architect",
    avatar: "/images/f.jpeg",
    batch: "HSC 2025-26",
    techStack: ["Astro", "Tailwind CSS", "TypeScript", "JavaScript", "Node.js"],
    contributions: [
      "Rebuilt the frontend architecture with a maintainable, scalable codebase",
      "Refactored legacy implementations while preserving functionality",
      "Implemented responsive, cross-browser compatible, production-ready interfaces",
    ],
    // socials: [
    //   {
    //     platform: "GitHub",
    //     url: "https://github.com",
    //     icon: "fa-brands fa-github",
    //   },
    //   {
    //     platform: "LinkedIn",
    //     url: "https://linkedin.com",
    //     icon: "fa-brands fa-linkedin",
    //   },
    //   {
    //     platform: "Facebook",
    //     url: "https://facebook.com",
    //     icon: "fa-brands fa-facebook-f",
    //   },
    // ],
    // featured: true,
  },
];
