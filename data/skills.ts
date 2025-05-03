export interface Skill {
  id: string;
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    id: "cloud-devops",
    title: "cloud",
    description: "AWS (EC2, ECS, S3, RDS, SES, SQS), DigitalOcean (Droplets, Managed DB, K8s), GitHub Actions, Docker, Kubernetes"
  },
  {
    id: "frontend",
    title: "frontend",
    description: "Next.js, React, Tailwind CSS, Framer Motion, Ant Design, React Query, SWR"
  },
  {
    id: "backend",
    title: "backend",
    description: "Node.js, Express, Nest.js, Vendure, Strapi, GraphQL, PostgreSQL"
  },
  {
    id: "languages-tools",
    title: "language & tools",
    description: "TypeScript, JavaScript, Go, Git, Linux, Vim, ETL Pipelines"
  }
]; 