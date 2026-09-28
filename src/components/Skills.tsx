import { skills } from "../constants";

export function Skills() {
  return (
    <div>
      <h1 className="text-2xl">Skiils and Technologies</h1>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <div key={i} className="w-1/5 bg-custom-card rounded-sm p-2">
            <h2 className="text-lg font-bold">{skill.groupName}</h2>
            <div className="flex flex-wrap gap-1">
              {skill.tech.map((tech, i) => (
                <p key={i} className="px-2 py-1 rounded-sm bg-custom-orange">
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
