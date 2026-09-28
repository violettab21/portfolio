import { projects } from "../constants";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <div>
      <h1 className="text-2xl">Projects</h1>
      <div className="flex gap-2">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
}
