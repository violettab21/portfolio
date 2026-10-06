import { experience, type Experience } from "../constants";
import { ExperienceBlock } from "./ExperienceBlock";

export function Experience() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Experience</h1>
      <div className="mt-5 grid grid-cols-[20%_80%] w-full">
        {experience.map((expData, i) => (
          <ExperienceBlock
            key={i}
            experienceData={expData}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
