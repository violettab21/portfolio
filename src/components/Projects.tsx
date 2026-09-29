import { projects } from "../constants";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="flex gap-2 mt-5 flex-wrap justify-between">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
