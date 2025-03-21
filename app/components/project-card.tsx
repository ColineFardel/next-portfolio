import RetroWindow from "./retro-window";

export default function ProjectCard({ project }: any) {

    return (
        <RetroWindow title={project.title} body={
            <div className="p-4">
                <div className="m-auto w-[100%] h-0 pb-[80%] bg-(--secondary) border-(--black) border">Image</div>
                <div className="mt-2">
                    <div>{project.description}</div>
                </div>
                <div className="flex justify-end">
                    <a className="bg-(--secondary) p-2 border-(--black) border" target="_blank" href={project.link}>
                        <img className="w-[40]" src="./github.svg" alt="" />
                    </a>
                </div>
            </div>
        } />
    )
}