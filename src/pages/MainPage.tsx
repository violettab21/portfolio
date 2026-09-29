import { About } from "../components/About";
import { Courses } from "../components/Courses";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";

export function MainPage() {
  return (
    <div className="bg-custom-dark text-white h-full flex flex-col items-center">
      <Header />
      <div className="max-w-310 flex flex-col gap-10 px-5">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Courses />
      </div>
      <Footer />
    </div>
  );
}
