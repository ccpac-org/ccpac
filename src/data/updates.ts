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
    tag: "International Achievement",
    title: "Our Raihan shines bright with the Silver Medal at the 67th IMO!",
    date: "Date: 20-07-2026",
    images: ["https://raw.githubusercontent.com/ccpactechnical-cloud/ccpac-official/main/silver.jpeg"],
    content: `The Chittagong College Physics and Astronomy Club (CCPAC) is filled with immense pride and joy to share that, at the 67th International Mathematical Olympiad (IMO) 2026 held in China, Chittagong College student Md. Raihan Siddiquee has clinched a Silver Medal, scoring 23 out of 42. After earning an Honorable Mention at the 66th IMO in Sunshine Coast, Australia, last year, he has reached new heights of success.`
  },
  "2": {
    id: "2",
    tag: "Appreciation & Recognition",
    title: "Tokens of Honour Conferred upon Honorable Principal, Vice Principal, and Moderator",
    date: "Date: 29-03-2026",
    images: [
      "https://raw.githubusercontent.com/ccpactechnical-cloud/ccpac-official/main/h1.jpeg",
      "https://raw.githubusercontent.com/ccpactechnical-cloud/ccpac-official/main/h2.jpeg",
      "https://raw.githubusercontent.com/ccpactechnical-cloud/ccpac-official/main/h3.jpeg"
    ],
    content: `Today, on behalf of the Executive Panel 2025–26 of Chattogram College Physics & Astronomy Club (CCPAC), tokens of honour were conferred upon Principal Prof. Mohammad Mozahidul Islam Chowdhury, Vice Principal Md. Shawkat Iqbal Faruqueee, and Moderator Md. Zahirul Islam in sincere recognition of their unwavering support.`
  },
  "3": {
    id: "3",
    tag: "College Administration",
    title: "Congratulating Md. Shawkat Iqbal Faruqueee on his appointment as Vice Principal",
    date: "Date: 11-01-2026",
    images: ["https://raw.githubusercontent.com/ccpactechnical-cloud/ccpac-official/main/vp.jpeg"],
    content: `Today, Chittagong College Physics & Astronomy Club warmly congratulated Md. Shawkat Iqbal Faruqueee on his appointment as the new Vice Principal of Chittagong College.`
  }
};
