import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = {
  professional: [
    {
      title: "Resimator",
      description: "Landing page with Strapi CMS, GraphQL, Framer Motion, and a custom design system",
      url: "https://staging.resimator.fi/",
      tags: ["Strapi", "GraphQL", "Framer Motion", "Design System"]
    },
    {
      title: "A5IT",
      description: "E-commerce platform developed in collaboration with Silson Sapkota",
      url: "https://a5it.com/",
      tags: ["E-commerce", "Collaboration"]
    },
    {
      title: "RPPSathi",
      description: "Artist group website",
      url: "https://rppsathi.com.np/",
      tags: ["Artist Platform"]
    },
    {
      title: "Hyperce",
      description: "First project - Landing page",
      url: "https://hyperce-main.vercel.app/",
      tags: ["Landing Page"]
    },
    {
      title: "Crunchfind",
      description: "Social networking platform for researchers and universities (work in progress)",
      tags: ["Social Network", "WIP"]
    },
    {
      title: "Cognistream",
      description: "Customer interviews with emotional depth analysis (work in progress)",
      tags: ["AI", "Analysis", "WIP"]
    }
  ],
  personal: [
    {
      title: "Webcraft",
      description: "Website builder built with Silson Sapkota and Sargam Poudel",
      url: "https://app.webcraft.raylux.io/",
      tags: ["Website Builder", "Collaboration"]
    },
    {
      title: "Invey Form Builder",
      description: "Form builder application (2023)",
      url: "https://invey.ankurgajurel.tech/formbuilder",
      tags: ["Form Builder", "2023"]
    },
    {
      title: "Hydra",
      description: "Desktop-friendly application",
      url: "https://hydra.ankurgajurel.com.np/",
      tags: ["Desktop App"]
    },
    {
      title: "An Ode to Letters",
      description: "Podcast platform (2023)",
      url: "https://utarchadhav.com/an-ode-to-letters",
      tags: ["Podcast", "2023"]
    },
    {
      title: "Webshop Emails",
      description: "Email template design clone",
      url: "https://webshop-emails.vercel.app/",
      tags: ["Email Design"]
    }
  ],
  ongoing: [
    {
      title: "Social Media Scheduling App",
      description: "Features OAuth with TikTok, Instagram and LinkedIn, self-hosted scheduler with Express, NextAuth, Prisma with Postgres, Stripe, and Supabase for Storage",
      tags: ["OAuth", "Express", "NextAuth", "Prisma", "Postgres", "Stripe", "Supabase"]
    },
    {
      title: "Journal Blog",
      description: "Built with Firebase Spark free tier (Auth, Storage, Database), NextJS for dashboard and frontend, and Resend for email notifications. A free-to-host journal website for a friend.",
      tags: ["Firebase", "NextJS", "Resend", "Free Tier"]
    }
  ]
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Professional Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.professional.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.personal.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.ongoing.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ title, description, url, tags }: {
  title: string
  description: string
  url?: string
  tags: string[]
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          {url && (
            <Link href={url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <ExternalLink className="h-5 w-5" />
            </Link>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 