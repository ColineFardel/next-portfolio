import RetroWindow from "./retro-window";

export default function About() {
  return (
    <section id="about" className="h-screen flex">
      <RetroWindow title='Coline Fardel' body={
        <div className="w-50 p-3">
          <span> klajéefa jejféao iewjfoédfjvaoiej ocivj we oaiiojaeo aéosijf </span>
          <button className="cursor-pointer w-fit bg-(--background) m-3 p-2 border-(--foreground) border-1 shadow-[-4px_4px_0_0_rgba(202,228,218,1)]">Download my CV</button>
        </div>
      } />
      <div>Image</div>
      <RetroWindow smallTitle title="Socials" body={
        <div className="flex gap-5 mx-5 my-2">
          <a target="_blank" href="https://github.com/ColineFardel">
            <img className="w-[40]" src="./github.svg" alt="" />
          </a>
          <a target="_blank" href="https://github.com/ColineFardel">
            <img className="w-[40]" src="./linkedin.svg" alt="" />
          </a>
        </div>
      } />

    </section>
  )
}