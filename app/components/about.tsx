import GenericButton from "./generic-button";
import Icon from "./icon";
import RetroWindow from "./retro-window";

export default function About() {
  return (
    <section id="about" className="h-screen flex">
      <div className="mt-18 grid grid-cols-5 grid-rows-3 p-15">
        <RetroWindow extraStyling=" col-span-2 row-span-2 h-[250]" title='Coline Fardel' body={
          <div className="p-3 flex flex-col justify-between items-between h-[90%]">
            <span>I'm a Fullstack developer with almost 3 years of experience. I'm looking for new opportunities to improve myself et become a better developer</span>
            <GenericButton link="./ColineFardel_CV.pdf" data={<div>Check my CV</div>} />
          </div>
        } />
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-4"></div>
        <RetroWindow extraStyling="h-fit" smallTitle title="Socials" body={
          <div className="flex gap-5 mx-5 my-2">
            <a target="_blank" href="https://github.com/ColineFardel">
              <Icon styles="w-[40]" iconName="github" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/coline-fardel-b31990172/">
              <Icon styles="w-[40]" iconName="linkedin" />
            </a>
          </div>
        } />
      </div>
    </section>
  )
}