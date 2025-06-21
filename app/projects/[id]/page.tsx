import { redirect } from "next/navigation";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import Button from "@/components/ui/button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = Number((await params).id);

  const project = projects.find((project) => project.id === id);

  if (!project)
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
      publishedTime: project.date,
      tags: project.technologies,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = Number((await params).id);

  const project = projects.find((project) => project.id === id);

  if (!project) redirect("/");

  return (
    <section className="container p-4 my-10 md:my-16 lg:my-20">
      <Link href="/" className="inline-block mb-10 group">
        <div className="flex items-center gap-2 text-sm">
          <ArrowUp
            size={20}
            className="rotate-90 group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span className="group-hover:underline">back to home</span>
        </div>
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-medium mb-4">
            {project.name}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-600">
            <time>{project.date}</time>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 border-[0.5px] border-black hover:bg-gray-200 transition-colors duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="mb-6 font-light leading-relaxed">
            {project.description}
          </p>

          {project.links?.demo && (
            <div className="mt-12 mb-8">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group flex items-center gap-2 text-sm">
                  <span>view demo</span>
                  <ArrowUp
                    size={16}
                    className="group-hover:rotate-45 transition-transform duration-300"
                  />
                </Button>
              </a>
            </div>
          )}

          <p className="mb-6 font-light leading-relaxed">{project?.content}</p>
        </div>

        <footer className="mt-16 pt-8 border-t-[0.5px] border-black">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 group text-lg"
          >
            <ArrowUp
              size={20}
              className="rotate-90 group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span className="group-hover:underline">back to projects</span>
          </Link>
        </footer>
      </article>
    </section>
  );
}
