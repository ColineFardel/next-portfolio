import ProjectCard from "./project-card";
import Title from "./title";

export default function Projects() {

    const projects = [
        {
            title: 'Qui est-ce ?',
            img: '',
            description: 'A browser game based on the game Qui est-ce',
            link: 'https://github.com/ColineFardel/angular-quiestce',
        },
        {
            title: 'Recipes Website',
            img: './images/RecipesImg.png',
            description: 'A web app created with Angular to see all my recipes',
            link: 'https://github.com/ColineFardel/angular-recipes',
        },
        {
            title: 'Portfolio',
            img: './images/PortfolioImg.png',
            description: 'This portfolio made with NextJs',
            link: 'https://github.com/ColineFardel/next-portfolio',
        },
    ];

    return (
        <section id="projects" className="h-screen flex flex-col">
            <Title title="Projects" />
            <div className="flex flex-wrap gap-3 p-3 justify-around items-center md:w-[80%] w-full m-auto">
                {projects.map((project) => <ProjectCard key={project.link} project={project} />)}
            </div>

        </section>
    )
}