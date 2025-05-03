import { ArrowUp } from "lucide-react";
import { Project } from "../../data/projects";

export default function HomeProjectCard({ project }: { project: Project }) {
  return (
    <div className="border-b-[0.5px] border-black grid grid-cols-5 p-2 group hover:bg-gray-200 transition-colors duration-200 font-light cursor-pointer">
      <div className="text-sm">{project.date}</div>
      <div className="col-span-2 text-sm">{project.name}</div>
      <div className="flex gap-2">
        {project.collabs.map((collab) => (
          <div key={collab} className="text-sm text-gray-600">
            @{collab}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 items-center">
        <div className="text-sm text-gray-600">{project.type}</div>
        <ArrowUp
          size={20}
          className="group-hover:rotate-45 transition-transform duration-300 text-gray-500"
        />
      </div>
    </div>
  );
}
