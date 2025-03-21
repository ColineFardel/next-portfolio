import ProjectCard from "./project-card";
import Title from "./title";

export default function Projects() {

    const projects = [
        {
            title: 'Project 1',
            img: '',
            description: 'Project blabla ljwj blalo eo slajib el fwlec.',
            link: 'https://github.com/ColineFardel/angular-quiestce',
        },
        {
            title: 'Project 2',
            img: '',
            description: 'Project blabla ljwj blalo eo slajib el fwlec.',
            link: 'bbb',
        },
        {
            title: 'Project 3',
            img: '',
            description: 'Project blabla ljwj blalo eo slajib el fwlec.',
            link: 'cc',
        },
    ];

    return (
        <section id="projects" className="h-screen flex flex-col">
            <Title title="Projects" />
            <div className="flex my-auto mx-10 gap-3 p-3 justify-around items-center">
                {projects.map((project) => <ProjectCard key={project.link} project={project} />)}
            </div>

        </section>
    )
}