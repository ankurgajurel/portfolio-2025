export type Project = {
  id: number;
  name: string;
  collabs: string[];
  type: string;
  date: string;
  description?: string;
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
    description: "Landing page with Strapi CMS, GraphQL, Framer Motion, and a custom design system",
    links: {
      demo: "https://staging.resimator.fi/"
    },
    technologies: ["Strapi", "GraphQL", "Framer Motion", "Design System"]
  },
  {
    id: 1,
    name: "a5it",
    date: "february, 2024",
    collabs: ["sls0n"],
    type: "fullstack/devops",
    description: "E-commerce platform developed in collaboration with Silson Sapkota",
    links: {
      demo: "https://a5it.com/"
    },
    technologies: ["E-commerce", "Collaboration"]
  },
  {
    id: 2,
    name: "rppsathi",
    date: "january, 2024",
    collabs: [],
    type: "frontend/strapi",
    description: "Artist group website",
    links: {
      demo: "https://rppsathi.com.np/"
    },
    technologies: ["Artist Platform"]
  },
  {
    id: 3,
    name: "webcraft",
    date: "december, 2023",
    collabs: ["sls0n", "devsargam"],
    type: "fullstack",
    description: "Website builder built with Silson Sapkota and Sargam Poudel",
    links: {
      demo: "https://app.webcraft.raylux.io/"
    },
    technologies: ["Website Builder", "Collaboration"]
  },
  {
    id: 4,
    name: "invey form builder",
    date: "november, 2023",
    collabs: [],
    type: "frontend",
    description: "Form builder application",
    links: {
      demo: "https://invey.ankurgajurel.tech/formbuilder"
    },
    technologies: ["Form Builder"]
  },
  {
    id: 5,
    name: "hydra",
    date: "2024",
    collabs: [],
    type: "ui conversion",
    description: "Desktop-friendly application",
    links: {
      demo: "https://hydra.ankurgajurel.com.np/"
    },
    technologies: ["Desktop App"]
  },
  {
    id: 6,
    name: "an ode to letters",
    date: "september, 2023",
    collabs: [],
    type: "fullstack",
    description: "Podcast platform",
    links: {
      demo: "https://utarchadhav.com/an-ode-to-letters"
    },
    technologies: ["Podcast"]
  },
  {
    id: 7,
    name: "webshop emails",
    date: "august, 2023",
    collabs: [],
    type: "design",
    description: "Email template design clone",
    links: {
      demo: "https://webshop-emails.vercel.app/"
    },
    technologies: ["Email Design"]
  },
  {
    id: 8,
    name: "crunchfind",
    date: "backend",
    collabs: [],
    type: "social",
    description: "Social networking platform for researchers and universities",
    technologies: ["Social Network", "WIP"]
  },
  {
    id: 9,
    name: "cognistream",
    date: "fullstack",
    collabs: [],
    type: "ai",
    description: "Customer interviews with emotional depth analysis",
    technologies: ["AI", "Analysis", "WIP"]
  },
  {
    id: 10,
    name: "social media scheduler",
    date: "in progress",
    collabs: [],
    type: "fullstack",
    description: "Features OAuth with TikTok, Instagram and LinkedIn, self-hosted scheduler with Express, NextAuth, Prisma with Postgres, Stripe, and Supabase for Storage",
    technologies: ["OAuth", "Express", "NextAuth", "Prisma", "Postgres", "Stripe", "Supabase"]
  },
  {
    id: 11,
    name: "journal blog",
    date: "in progress",
    collabs: [],
    type: "fullstack",
    description: "Built with Firebase Spark free tier (Auth, Storage, Database), NextJS for dashboard and frontend, and Resend for email notifications. A free-to-host journal website for a friend.",
    technologies: ["Firebase", "NextJS", "Resend", "Free Tier"]
  }
];
