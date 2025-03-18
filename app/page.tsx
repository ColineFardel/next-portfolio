import Navbar from "./components/navbar";
import About from "./components/about";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Skills from "./components/skills";
import Projects from "./components/projects";

config.autoAddCss = false;

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills/>
      <Projects/>
      <section id="contact" className="h-screen bg-(--secondary)">
        blabalblabla
      </section>
    </div>
  );
}
