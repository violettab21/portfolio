import { Link } from "react-router";
import { courses } from "../constants";

export function Courses() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Courses</h1>
      <div className="flex flex-wrap gap-2 mt-5 justify-between">
        {courses.map((course, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 w-full md:w-[30%] bg-custom-card rounded-sm p-5"
          >
            <h2 className="text-lg font-bold">{course.name}</h2>
            <h2>{course.school}</h2>
            <p>Year: {course.completedOn}</p>
            <Link
              className="text-center block w-1/2 bg-amber-600 p-2 rounded-2xl"
              to={course.certificateLink}
              target="_blank"
            >
              View certificate
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
