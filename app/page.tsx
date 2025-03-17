import Navbar from "./components/navbar";
import About from "./components/about";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <section id="skills" className="h-screen bg-(--secondary) flex flex-col">
        <h1 className="pt-20 m-auto">Skills</h1>
        <div className="divider border-t-1 border-black w-[50%] m-auto"></div>
        <div>Frontend</div>
        <div>Backend</div>
        <div className="bg-(--foreground)">
<img src="./html-5-Stroke-Rounded.png" alt="" className="h-15 w-15"/>
        </div>
      </section>
      <section id="projects" className="h-screen">
        blabalblabla
      </section>
      <section id="contact" className="h-screen bg-(--secondary)">
        blabalblabla
      </section>
    </div>
  );
}
