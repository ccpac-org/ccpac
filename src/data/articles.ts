export interface Author {
  name: string;
  roll?: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  featured?: boolean;
  authors: Author[];
  excerpt: string;
  content: string[];
  images: string[];
  pdf?: string;
}

export const articlesData: Article[] = [
  {
    id: "006",
    title:
      "Aiming for the Next Star: The Chandrasekhar Limit of Footballing Heritage",
    category: "Special Feature",
    featured: true,
    authors: [{ name: "CCPAC Editorial Team" }],
    excerpt:
      "Tonight in New Jersey, Spain and Argentina meet in the FIFA World Cup 2026 Final. Breaking down footballing heritage through stellar physics...",
    content: [
      "Tonight in New Jersey, Spain and Argentina meet in the FIFA World Cup 2026 Final. This article bridges the gap between astrophysics and the beautiful game, analyzing footballing heritage, tactical pressure, and legacy through the lens of stellar physics and the famous Chandrasekhar Limit.",
      "Just as a star balances gravitational collapse with internal thermal pressure up to a critical mass limit, legendary football squads maintain tactical equilibrium under immense global spotlight before a breakthrough changes everything.",
    ],
    images: [
      "/images/c1.jpg",
      "/images/c2.jpg",
      "/images/c3.jpg",
      "/images/c4.jpg",
      "/images/c5.jpg",
      "/images/c6.jpg",
      "/images/c7.jpg",
    ],
  },
  {
    id: "005",
    title: "Through the Hill: How Quantum Mechanics Breaks the Rules",
    category: "Quantum Tunelling",
    featured: true,
    authors: [{ name: "Farhan Ahmad", roll: "1202526010031" }],
    excerpt:
      "An exploration of quantum tunneling defying classical intuition, wave-particle duality, and Heisenberg's Uncertainty Principle.",
    content: [
      "An exploration of quantum tunneling defying classical intuition. In classical mechanics, a particle without sufficient energy cannot cross a potential energy barrier. However, quantum mechanics introduces wave-particle duality and probability amplitudes, allowing particles to slip right through.",
      "This deep-dive article covers wave functions, Heisenberg's Uncertainty Principle, and real-world occurrences like stellar fusion in main-sequence stars governed by quantum probability.",
    ],
    images: [
      "/images/fr0.jpeg",
      "/images/fr1.jpeg",
      "/images/fr2.jpeg",
      "/images/fr3.jpeg",
      "/images/fr4.jpeg",
    ],
  },
  {
    id: "004",
    title: "নক্ষত্রের বিবর্তন: নীহারিকা থেকে কৃষ্ণগহ্বর (তারার জীবনচক্র ও গঠন)",
    category: "Stellar Evolution",
    featured: true,
    authors: [
      { name: "Rajarshi Das Gupta", roll: "1202526010041" },
      { name: "Efaj Mahadi Bhuiyan", roll: "1202526010128" },
    ],
    excerpt:
      "হাইড্রোস্ট্যাটিক সাম্যাবস্থা, ফিউশন শক্তির পরিবহন এবং তারার স্তরবিন্যাসযুক্ত অভ্যন্তরীণ গঠন নিয়ে বিস্তারিত আলোচনা।",
    content: [
      "মহাবিশ্বের মহাপ্রাচীর এবং সুদূর গ্যালাক্সিগুলোর মাঝে নক্ষত্রের জন্ম, জীবনচক্র এবং তাদের ভয়ংকর অন্তিম পরিণতি এক পরম বিস্ময়কর বৈজ্ঞানিক যাত্রা। এই দুই পর্বের বিশেষ সংকলিত প্রবন্ধে তারার জন্মের আদি উৎস অর্থাৎ মহাজাগতিক গ্যাস ও ধূলিকণার বিশাল মেঘ বা নীহারিকা (Nebula) থেকে শুরু করে প্রোটোস্টার (Protostar) গঠনের বিস্তারিত প্রক্রিয়া নিখুঁতভাবে তুলে ধরা হয়েছে।",
      "একটি মূলধারার তারার অভ্যন্তরে প্রতিনিয়ত যে পারমাণবিক সংযোজন বা নিউক্লিয়ার ফিউশন বিক্রিয়া (Nuclear Fusion) ঘটে, তার ফলে উৎপন্ন বহির্মুখী চাপ এবং মহাকর্ষীয় আকর্ষণের মধ্যকার নিখুঁত ভারসাম্য বা হাইড্রোস্ট্যাটিক সাম্যাবস্থা (Hydrostatic Equilibrium) কীভাবে তারাকে স্থিতিশীল রাখে, তা এখানে ব্যাখ্যা করা হয়েছে। এছাড়া কেমিক্যালের উপাদান পুঞ্জীভূত হয়ে কীভাবে তারার বিভিন্ন স্তরবিন্যাসযুক্ত অভ্যন্তরীণ গঠন (Internal Stratification) তৈরি হয় তা অত্যন্ত সাবলীলভাবে ফুটিয়ে তোলা হয়েছে।",
      "নিবন্ধটির দ্বিতীয় অংশে তারার জীবনের চরম নাটকীয় পরিণতি আলোচনা করা হয়েছে। জ্বালানি ফুরিয়ে যাওয়ার পর মাঝারি আকারের তারাগুলো লোহিত দানব বা রেড জায়ান্ট (Red Giant) দশায় পরিণত হয়ে পরবর্তীতে শ্বেত বামন (White Dwarf) ও গ্রহীয় নীহারিকায় রূপ নেয়। অন্যদিকে, বিশাল ভরের তারাগুলো সুপারনোভা (Supernova) নামক এক প্রলয়ঙ্করী বিস্ফোরণের মধ্য দিয়ে নিউট্রন তারা কিংবা পরম রহস্যময় কৃষ্ণগহ্বর বা ব্ল্যাক হোলে (Black Hole) পরিণত হয়।",
      "জন্ম থেকে মৃত্যু—তারার এই রূপান্তর কেবল মহাজাগতিক পদার্থের এক অবিরাম খেলা নয়, বরং এটি আমাদের নিজেদের অস্তিত্বের শেকড়সন্ধান, যা মহাবিশ্বের সৃষ্টির রহস্যকে উপলব্ধি করার এক অনুপম জানালা খুলে দেয়।",
    ],
    images: [
      "/images/st0.jpeg",
      "/images/st1.jpeg",
      "/images/st2.jpeg",
      "/images/st3.jpeg",
      "/images/st4.jpeg",
      "/images/st5.jpeg",
      "/images/st6.jpeg",
  
    ],
  },
  {
    id: "003",
    title: "π Tends To 4: Story of Pi and Number 4",
    category: "Pi Day Special",
    authors: [{ name: "Prithwijit Mallik", roll: "1202425010176" }],
    excerpt:
      "Though π is irrational, why has it tended to its nearest natural number 4? Exploring the mathematical paradox.",
    content: [
      "Though π is an irrational mathematical constant approximately equal to 3.14159, geometric paradoxes and convergent approximations sometimes point toward fascinating limits. Why does number 4 recur in specific perimeter approximations?",
      "This article dives into mathematical paradoxes, limits, geometric constructions, and the philosophical beauty of numbers that captivate mathematicians worldwide.",
    ],
    images: ["/images/pi1.jpeg", "/images/pi2.jpeg"],
  },
  {
    id: "002",
    title: "The Physics of a Skipping Stone: Underdamped Motion",
    category: "Physics Research",
    authors: [{ name: "Rajarshi Das Gupta", roll: "1202526010041" }],
    excerpt:
      "Every skip is a battle between momentum and drag, explained through differential equations and fluid-surface interactions.",
    content: [
      "Every skip of a stone across water is a delicate physical battle between momentum, rotational gyroscopic stability, and hydrodynamic drag. Modeled through differential equations, this study examines underdamped oscillatory motion.",
      "Discover how angle of attack, velocity, and surface tension dictate whether a stone sinks instantly or bounces across the liquid interface multiple times.",
    ],
    images: ["/images/r1.jpeg", "/images/r2.jpeg", "/images/r3.jpeg"],
  },
  {
    id: "001",
    title: "Particle Dynamics in Stratified Planetary Atmospheres",
    category: "Atmospheric Dynamics",
    authors: [{ name: "Sajjad Hosen Sakib", roll: "1202425010149" }],
    excerpt:
      "An advanced study combining analytical modeling, numerical simulations, and survey-based educational insights.",
    content: [
      "Planetary atmospheres exhibit complex density and temperature stratification that significantly influence suspended aerosol and particle behavior. This advanced research combines analytical modeling and numerical simulations.",
      "The article explores how gravity waves, atmospheric viscosity, and terminal settling velocities interact to govern pollutant and dust dispersion in planetary layers.",
    ],
    images: [
      "/images/sh1.jpeg",
      "/images/sh2.jpeg",
      "/images/sh3.jpeg",
      "/images/sh4.jpeg",
    ],
  },
];

export function getArticleById(id: string): Article | undefined {
  return articlesData.find((article) => article.id === id);
}
