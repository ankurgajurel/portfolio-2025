import { ArrowUp } from "lucide-react";
import Link from "next/link";

interface ProjectLinksProps {
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  technologies?: string[];
}

export default function ProjectLinks({ links, technologies }: ProjectLinksProps) {
  return (
    <div className="flex flex-col gap-8">
      {links && Object.keys(links).length > 0 && (
        <div>
          <h2 className="text-2xl mb-4">links</h2>
          <div className="flex flex-col gap-2">
            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                className="flex items-center gap-2 group text-lg"
              >
                <span className="group-hover:underline">github</span>
                <ArrowUp
                  size={20}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </Link>
            )}
            {links.demo && (
              <Link
                href={links.demo}
                target="_blank"
                className="flex items-center gap-2 group text-lg"
              >
                <span className="group-hover:underline">demo</span>
                <ArrowUp
                  size={20}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </Link>
            )}
            {links.docs && (
              <Link
                href={links.docs}
                target="_blank"
                className="flex items-center gap-2 group text-lg"
              >
                <span className="group-hover:underline">documentation</span>
                <ArrowUp
                  size={20}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </Link>
            )}
          </div>
        </div>
      )}

      {technologies && technologies.length > 0 && (
        <div>
          <h2 className="text-2xl mb-4">technologies</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm border-[0.5px] border-black hover:bg-gray-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 