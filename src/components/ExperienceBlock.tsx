import type { Experience } from "../constants";
import { Circle } from "./Circle";
import { Line } from "./Line";

export function ExperienceBlock({
  experienceData,
  isLast,
}: {
  experienceData: Experience;
  isLast: boolean;
}) {
  return (
    <>
      <div className="flex w-12 flex-col justify-self-center">
        <Circle year={experienceData.year} />
        {!isLast ? <Line /> : null}
      </div>
      <div>
        <div className="bg-custom-card p-5 mb-7 rounded-sm">
          <h1 className="text-xl font-bold">{experienceData.role}</h1>
          <p>{experienceData.company}</p>
          <br />
          <p>{experienceData.description}</p>
          <p className="text-sm font-bold mt-3">Responsibilities:</p>
          <ul className="text-sm list-disc pl-5">
            {experienceData.responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
