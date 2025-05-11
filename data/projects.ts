export type Project = {
  id: number;
  name: string;
  collabs: string[];
  type: string;
  date: string;
  description?: string;
  content?: string;
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  technologies?: string[];
  images?: {
    src: string;
    alt: string;
  }[];
};

export const projects: Project[] = [
  {
    id: 0,
    name: "resimator's landing page",
    date: "march, 2024",
    collabs: [],
    type: "fullstack",
    description:
      "Landing page with Strapi CMS, GraphQL, Framer Motion, and a custom design system",
    links: {
      demo: "https://staging.resimator.fi/",
    },
    technologies: ["strapi", "graphQL", "framer motion", "design system"],
  },
  {
    id: 1,
    name: "a5it",
    date: "february, 2024",
    collabs: ["sls0n"],
    type: "fullstack/devops",
    description:
      "E-commerce platform developed in collaboration with Silson Sapkota",
    links: {
      demo: "https://a5it.com/",
    },
    technologies: ["e-commerce", "collaboration"],
  },
  {
    id: 3,
    name: "webcraft",
    date: "december, 2024",
    collabs: ["sls0n", "devsargam"],
    type: "fullstack",
    description: "Website builder built with Silson Sapkota and Sargam Poudel",
    links: {
      demo: "https://app.webcraft.raylux.io/",
    },
    technologies: ["website builder", "collaboration"],
  },
  {
    id: 4,
    name: "invey",
    date: "november, 2023",
    collabs: ["shekharkoirala"],
    type: "frontend",
    description: "Form builder application",
    links: {
      demo: "https://invey.ankurgajurel.tech/formbuilder",
    },
    technologies: ["form builder"],
  },
  {
    id: 5,
    name: "hydra",
    date: "2024",
    collabs: [],
    type: "ui conversion",
    description: "Desktop-friendly application",
    links: {
      demo: "https://hydra.ankurgajurel.com.np/",
    },
    technologies: ["ui design"],
  },
  {
    id: 6,
    name: "utarchadhav",
    date: "september, 2023",
    collabs: ["kirangajurel"],
    type: "fullstack",
    description: "Podcast platform",
    links: {
      demo: "https://utarchadhav.com",
    },
    technologies: ["podcast"],
  },
  {
    id: 7,
    name: "webshop emails",
    date: "august, 2023",
    collabs: [],
    type: "design",
    description: "Email template design clone",
    links: {
      demo: "https://webshop-emails.vercel.app/",
    },
    technologies: ["email design"],
  },
  {
    id: 8,
    name: "crunchfind",
    date: "backend",
    collabs: [],
    type: "social",
    description: "Social networking platform for researchers and universities",
    technologies: ["social network", "wip"],
  },
  {
    id: 9,
    name: "cognistream",
    date: "fullstack",
    collabs: ["shekharkoirala"],
    type: "ai",
    description: "Customer interviews with emotional depth analysis",
    technologies: ["ai", "analysis", "wip"],
  },
  {
    id: 10,
    name: "social media scheduler",
    date: "in progress",
    collabs: ["sumansid"],
    type: "fullstack",
    description:
      "Features OAuth with TikTok, Instagram and LinkedIn, self-hosted scheduler with Express, NextAuth, Prisma with Postgres, Stripe, and Supabase for Storage",
    technologies: [
      "oAuth",
      "express",
      "nextAuth",
      "prisma",
      "postgres",
      "stripe",
      "supabase",
    ],
  },
];
