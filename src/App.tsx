import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import ScrollProgress, { BackToTop } from "./components/ScrollProgress";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import { useScrollSpy, useScrollProgress } from "./hooks/useScroll";

export default function App() {
  const activeSection = useScrollSpy(["home", "about", "skills", "projects", "experience", "contact"]);
  const scrollProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress progress={scrollProgress} />
      <Cursor />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
