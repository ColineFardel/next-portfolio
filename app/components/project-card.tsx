export default function ProjectCard({ project }: any) {

    return (
        <div className="shadow-[5px_5px_5px_0_rgba(30,30,30,0.25)] bg-(--foreground) rounded-3xl p-4 m-5 text-(--secondary) w-fit h-fit">
            <div className="m-auto w-[100%] h-0 pb-[80%] bg-(--secondary) rounded-lg">Image</div>
            <div className="mt-4">
                <div className="text-lg font-bold">{project.title}</div>
                <div>{project.description}</div>
            </div>
            <div className="flex justify-end">
                <a target="_blank" href={project.link}>
                    <img className="w-[40]" src="./github-light.svg" alt="" />
                </a>
            </div>
        </div>
    )
}