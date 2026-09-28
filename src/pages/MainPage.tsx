import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export function MainPage() {
  return (
    <div className="bg-custom-dark text-white">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
