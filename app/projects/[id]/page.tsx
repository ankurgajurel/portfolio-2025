import { projects } from "@/data/projects";
import { redirect } from "next/navigation";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import ProjectLinks from "@/components/projects/project-links";
import ProjectGallery from "@/components/projects/project-gallery";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = projects.find((project) => project.id.toString() === id);

  if (!project) redirect("/");

  return (
    <section className="container p-4 my-10 md:my-16 lg:my-20">
      <Link href="/" className="inline-block mb-10 group">
        <div className="flex items-center gap-2 text-sm">
          <ArrowUp size={20} className="rotate-90 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="group-hover:underline">back to home</span>
        </div>
      </Link>

      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-medium mb-4">{project.name}</h1>
          <div className="flex gap-4 text-sm">
            <div>{project.date}</div>
            <div>{project.type}</div>
          </div>
        </div>

        {project.images && project.images.length > 0 && (
          <ProjectGallery images={project.images} />
        )}

        <div className="border-t-[0.5px] border-black pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl mb-4">details</h2>
              <div className="text-lg font-light leading-relaxed">
                <p>{project.description || `A ${project.type} project from ${project.date}.`}</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl mb-4">collaborators</h2>
              <div className="flex flex-col gap-2">
                {project.collabs.map((collab) => (
                  <div key={collab} className="text-lg">@{collab}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {(project.links || project.technologies) && (
          <div className="border-t-[0.5px] border-black pt-8">
            <ProjectLinks links={project.links} technologies={project.technologies} />
          </div>
        )}
      </div>
    </section>
  );
}
