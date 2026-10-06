import { skills } from "../constants";

export function Skills() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Skills and Technologies</h1>
      <div className="flex flex-wrap gap-2 mt-5 justify-between">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="w-full sm:max-lg:w-[45%] sm:max-lg:grow lg:flex-1 bg-custom-card/60 rounded-sm p-4"
          >
            <h2 className="text-lg font-bold">{skill.groupName}</h2>
            <div className="flex flex-wrap gap-2 mt-5">
              {skill.tech.map((tech, i) => (
                <p key={i} className="px-2 py-1 rounded-sm bg-amber-600">
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
