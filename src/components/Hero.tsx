import cv from "../../public/CV.pdf";

export function Hero() {
  return (
    <section className="md:w-1/2 flex flex-col items-center gap-10 self-center mt-10">
      <h1 className="text-3xl">Hello, I'm Violetta</h1>
      <p className="text-center">
        A Junior Developer with a solid background in QA. My tech journey
        started in software testing, which taught me how to look at apps through
        a critical lens and think about edge cases. Today, I leverage that
        mindset to build web applications using React, TypeScript, and Node.js.
      </p>
      <div className="flex flex-col items-center gap-4 w-full lg:flex-row">
        {" "}
        <a
          className="grow text-center w-3/4 block lg:basis-1/2 sm:w-1/2 bg-amber-600 p-2 rounded-2xl"
          href="#projects"
        >
          {" "}
          Check out my pet projects
        </a>
        <a
          href={cv}
          download="cv"
          target="_blank"
          className="grow text-center w-3/4 block lg:basis-1/2 sm:w-1/2 bg-amber-600 p-2 rounded-2xl"
        >
          {" "}
          Download CV
        </a>
      </div>
    </section>
  );
}
