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
  bio: string;
  batch: string;
  techStack: string[];
  contributions: string[];
  socials: SocialLink[];
  featured?: boolean;
}

export const developersData: Developer[] = [
  {
    id: "1",
    name: "Lead Developer",
    role: "Lead Full-Stack & UI/UX Architect",
    avatar: "/images/logo.png",
    bio: "Passionate software engineer and physics enthusiast dedicated to crafting high-performance, immersive web applications and digital platforms for educational communities.",
    batch: "HSC 2025-26",
    techStack: ["Astro", "Tailwind CSS", "TypeScript", "JavaScript", "Node.js"],
    contributions: [
      "Architected the entire CCPAC web platform using Astro and Tailwind CSS",
      "Designed interactive UI components, modals, and dynamic data systems",
      "Optimized web performance, responsive layouts, and accessibility standards",
    ],
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com",
        icon: "fa-brands fa-github",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        icon: "fa-brands fa-linkedin",
      },
      {
        platform: "Facebook",
        url: "https://facebook.com",
        icon: "fa-brands fa-facebook-f",
      },
    ],
    featured: true,
  },
  {
    id: "2",
    name: "Development Team",
    role: "Frontend & Content Engineers",
    avatar: "/images/logo.png",
    bio: "Collaborative engineering unit supporting interactive features, content management structures, and seamless user experiences across all club initiatives.",
    batch: "CCPAC Tech Division",
    techStack: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
    contributions: [
      "Integrated academic archives, podcast episodes, and weekly challenge sections",
      "Maintained cross-browser compatibility and mobile responsiveness",
      "Ensured rigorous code quality and rapid asset delivery",
    ],
    socials: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/ccpacofficial",
        icon: "fa-brands fa-facebook-f",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/ccpac.official",
        icon: "fa-brands fa-instagram",
      },
    ],
    featured: false,
  },
];
