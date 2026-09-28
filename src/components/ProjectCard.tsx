import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../constants";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col w-1/3 bg-custom-card rounded-sm p-2 gap-2">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div className="flex flex-wrap gap-1">
        {project.stack.map((el, i) => (
          <p key={i} className="px-2 py-1 rounded-xl border-amber-300 border-2">
            {el}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <Link
          className="bg-amber-500 block px-2 py-1 rounded-sm w-[40%]"
          to={project.projectLink}
          target="_blank"
        >
          View the project
        </Link>
        <Link
          className="bg-amber-500 block px-2 py-1 rounded-sm w-[40%]"
          to={project.github}
          target="_blank"
        >
          <div className="flex justify-center items-center gap-2">
            Github <FaGithub />
          </div>
        </Link>
      </div>
    </div>
  );
}
