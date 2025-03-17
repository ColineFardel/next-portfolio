import Navbar from "./components/navbar";
import About from "./components/about";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Skills from "./components/skills";

config.autoAddCss = false;

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills/>
      
      <section id="projects" className="h-screen flex flex-col">
        <h1 className="section-title">Projects</h1>
        <div className="divider"></div>
      </section>
      <section id="contact" className="h-screen bg-(--secondary)">
        blabalblabla
      </section>
    </div>
  );
}
