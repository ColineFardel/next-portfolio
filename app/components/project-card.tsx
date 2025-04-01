import GenericButton from "./generic-button";
import Icon from "./icon";
import RetroWindow from "./retro-window";

export default function ProjectCard({ project }: any) {

    return (
        <RetroWindow extraStyling="w-2/7 aspect-3/4" title={project.title} body={
            <div className="p-4 justify-between flex flex-col h-full">
                <div>
                    <div className="aspect-3/2 bg-(--secondary) border-(--black) border overflow-hidden">
                        {project.img ? <img src={project.img} alt="" /> : ''}
                    </div>

                    <div className="mt-5">
                        <div>{project.description}</div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <GenericButton link={project.link} data={<Icon styles="w-[40]" iconName="github" />} />
                </div>
            </div>
        } />
    )
}