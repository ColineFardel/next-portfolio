export default function About() {
  return (
    <section id="about" className="h-screen flex">
        <div className="m-20 mt-40 w-80 border-3 border-black h-fit flex flex-col">
          <div className="border-black border-b-3 w-full h-5">
            <div className="bg-[#f6f4ef] w-5 h-full border-r-3 border-black">
              <img src="./cross.png" alt="" />
            </div>
          </div>
          <div className="bg-[#f6f4ef] text-(--foreground) flex flex-col p-3">
            <span>Hello ! I'm <span className="text-(--secondary) font-bold">Coline Fardel</span></span>
            <span> klajéefa jejféao iewjfoédfjvaoiej ocivj we oaiiojaeo aéosijf </span>
            <button className="cursor-pointer w-fit bg-(--background) m-3 p-2 border-(--foreground) border-1 shadow-[-4px_4px_0_0_rgba(202,228,218,1)]">Download my CV</button>
          </div>
        </div>
        <div>Image</div>
      </section>
  )
}