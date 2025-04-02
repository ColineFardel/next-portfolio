import GenericButton from "./generic-button";
import Icon from "./icon";
import RetroWindow from "./retro-window";

export default function ProjectCard({ project }: any) {

    return (
        <RetroWindow extraStyling="w-2/7 aspect-7/8 lg:aspect-3/4 min-w-[180px] md:min-w-[250px]" title={project.title} body={
            <div className="p-2 md:p-4 justify-between flex flex-col h-full">
                <div>
                    <div className="aspect-2/1 md:aspect-3/2 bg-(--secondary) border-(--black) border overflow-hidden">
                        {project.img ? <img src={project.img} alt="" /> : ''}
                    </div>

                    <div className="md:mt-2 lg:mt-5 text-sm lg:text-lg">
                        <div>{project.description}</div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <GenericButton link={project.link} data={<Icon styles="w-[20] md:w-[40]" iconName="github" />} />
                </div>
            </div>
        } />
    )
}