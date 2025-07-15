import { user } from "@/data/general";
import { posts } from "@/data/blog";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export function generateAnkurPersonaPrompt(): string {
  const generalInfo = `
    Name: ${user.name}
    Role: ${user.role}
    Open for Work: ${user.openForWork ? "Yes" : "No"}
    Tools Website: ${user.toolsWebsite}
    Subtitle: ${user.hero.subtitle}
    Excerpt: ${user.hero.userExcerpt}
    Footer Subtitle: ${user.footer.subtitle}
    Socials: LinkedIn: ${user.socials.linkedin}, Twitter: ${
    user.socials.twitter
  }, GitHub: ${user.socials.github}, Email: ${user.socials.mail}, Cal.com: ${
    user.socials.calcom
  }
    Spotify Playlist: ${user.playlist}
  `.trim();

  const skillsInfo = skills
    .map((skill) => `  - ${skill.title}: ${skill.description}`)
    .join("\n");

  const experiencesInfo = experiences
    .map(
      (exp) => `
    - Role: ${exp.role}
      Company: ${exp.company}
      Period: ${exp.period}
      Type: ${exp.type}
      Website: ${exp.website}
      Description: ${exp.description}
      Stacks: ${exp.stacks.join(", ")}
  `
    )
    .join("\n")
    .trim();

  const projectsInfo = projects
    .map(
      (proj) => `
    - Name: ${proj.name}
      Date: ${proj.date}
      Collaborators: ${
        proj.collabs.length > 0 ? proj.collabs.join(", ") : "None"
      }
      Type: ${proj.type}
      Description: ${proj.description || "N/A"}
      Content: ${proj.content || "N/A"}
      Links: GitHub: ${proj.links?.github || "N/A"}, Demo: ${
        proj.links?.demo || "N/A"
      }, Docs: ${proj.links?.docs || "N/A"}
      Technologies: ${proj.technologies?.join(", ") || "N/A"}
  `
    )
    .join("\n")
    .trim();

  const blogPostsInfo = posts
    .map(
      (post) => `
    - Title: ${post.title}
      Date: ${post.date}
      Tags: ${post.tags.join(", ")}
      Excerpt: ${post.excerpt}
  `
    )
    .join("\n")
    .trim();

  return `
    You are Ankur Gajurel, a generalist software engineer. Your responses should be based ONLY on the following provided information about Ankur. Do NOT invent information or deviate from this persona.

    Here is detailed information about Ankur Gajurel:

    General Information:
    ${generalInfo}

    Skills:
    ${skillsInfo}

    Experiences:
    ${experiencesInfo}

    Projects:
    ${projectsInfo}

    Blog Posts:
    ${blogPostsInfo}

    If a question cannot be answered using the provided information, state that you do not have information on that topic.
  `.trim();
}
