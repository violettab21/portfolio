import { experience, type Experience } from "../constants";
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

export function Circle({ year }: { year: number }) {
  return (
    <div className="rounded-full w-12 h-12 bg-custom-orange flex justify-center items-center">
      <p className="font-bold">{year}</p>
    </div>
  );
}

export function Line() {
  return (
    <div className="w-0.5 h-[calc(100%-48px)] bg-custom-orange self-center"></div>
  );
}
