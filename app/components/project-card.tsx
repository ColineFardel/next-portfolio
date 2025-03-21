import GenericButton from "./generic-button";
import RetroWindow from "./retro-window";

export default function ProjectCard({ project }: any) {

    return (
        <RetroWindow extraStyling="h-90 w-2/7" title={project.title} body={
            <div className="h-[92%] p-4 justify-between flex flex-col">
                <div className="h-3/5 bg-(--secondary) border-(--black) border overflow-hidden">
                {project.img ? <img src={project.img} alt="" /> : ''}
                
                </div>
                <div className="mt-2">
                    <div>{project.description}</div>
                </div>
                <div className="flex justify-end">
                    <GenericButton link={project.link} data={<img className="w-[40]" src="./github.svg" alt="" />}/>
                </div>
            </div>
        } />
    )
}