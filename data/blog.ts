export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: "cloud-cost-optimization",
    title: "saving my company 57% on aws",
    slug: "cloud-cost-optimization",
    excerpt:
      "A simple story about how I helped my company save money on cloud services. Learn from my mistakes and successes in making cloud computing more affordable.",
    date: "june 15, 2024",
    tags: ["cloud", "aws", "cost-optimization", "devops", "automation"],
    content: `
    When I stepped into my new role, I inherited what many tech teams face cloud infrastructure that had grown organically with little optimization. Our previous engineer, likely focused on stability over cost, had deployed all our projects on oversized EC2 instances. We were bleeding nearly $3,500 monthly on resources that sat mostly idle.

    Looking at those AWS bills made me wonder lmao. I knew we could do better without sacrificing performance.

    I dove into each of our 5-7 projects, understanding their actual needs versus what they were provisioned with. Container technology seemed like the perfect solution. By migrating several workloads to Amazon ECS, we could share resources more efficiently and scale based on actual demand.

    The migration wasn't just technical, it required convincing the product manager that this change wouldn't disrupt operations. Each service moved was a small victory, and watching resource utilization climb while costs dropped was deeply satisfying.

    Within weeks, our monthly AWS bill plummeted to around $1,500, a 57% reduction that made both engineering and finance teams happy.

    Throughout my period at this company, I continued managing our essential AWS services—S3, RDS, the remaining EC2 instances, ECS, SES, and SQS—ensuring our applications ran smoothly while becoming dramatically more cost-efficient.

    After this was successful, I was offered a 25% raise so everything was worth it lmao.

    Sometimes the most impactful engineering isn't building something new, but optimizing what you already have.
    `,
  },
];
