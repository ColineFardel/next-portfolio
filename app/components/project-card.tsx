export default function ProjectCard({ project }: any) {

    return (
        <div className="bg-(--foreground) rounded-xl p-6 m-5 text-(--secondary) w-fit h-fit">
            <div className="m-auto w-[95%] h-0 pb-[95%] bg-(--secondary) rounded-lg">Image</div>
            <div className="mt-4">
                <div className="text-lg font-bold">{project.title}</div>
                <div>{project.description}</div>
            </div>
            <div className="flex justify-end">
                <a target="_blank" href={project.link}>
                    <img className="w-[40]" src="./github-brands.svg" alt="" />
                </a>
            </div>
        </div>
    )
}