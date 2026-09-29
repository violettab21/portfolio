import { education } from "../constants";
import { Circle } from "./Experience";

export function Education() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Education</h1>
      <div className="flex gap-10 mt-5">
        <Circle year={education.graduationYear} />
        <div className="bg-custom-card rounded-sm p-3">
          <h1 className="text-xl font-bold">{education.name}</h1>
          <h2>{education.faculty}</h2>
          <h2>{education.specialty}</h2>
        </div>
      </div>
    </section>
  );
}
