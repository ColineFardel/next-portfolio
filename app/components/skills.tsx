import Title from "./title";
import IconCard from "./icon-card";
import RetroWindow from "./retro-window";

export default function Skills() {

    const data = [
        {
            name: 'Database',
            nbrCol: 'lg:col-span-4',
            stack: [
                {
                    name: 'Firebase',
                    icon: 'firebase',
                    knowledge: 3
                },
                {
                    name: 'PostgreSQL',
                    icon: 'postgre',
                    knowledge: 2
                },
                {
                    name: 'MySQL',
                    icon: 'database',
                    knowledge: 2
                },
            ]
        },
        {
            name: 'Backend',
            nbrCol: 'lg:col-span-4',
            stack: [
                {
                    name: 'Java',
                    icon: 'java',
                    knowledge: 4
                },
                {
                    name: 'Spring Boot',
                    icon: 'spring',
                    knowledge: 3
                },
                {
                    name: 'JavaScript',
                    icon: 'js',
                    knowledge: 4
                },
            ]
        },
        {
            name: 'Frontend',
            nbrCol: 'lg:col-span-5',
            stack: [
                {
                    name: 'React',
                    icon: 'react',
                    knowledge: 3
                },
                {
                    name: 'Angular',
                    icon: 'angular',
                    knowledge: 4
                },
                {
                    name: 'CSS',
                    icon: 'css',
                    knowledge: 2
                },
                {
                    name: 'HTML',
                    icon: 'html',
                    knowledge: 2
                },
                {
                    name: 'TypeScript',
                    icon: 'ts',
                    knowledge: 3
                },
            ]
        },
        {
            name: 'Other',
            nbrCol: 'lg:col-span-3',
            stack: [
                {
                    name: 'Jira',
                    icon: 'jira',
                    knowledge: 2
                },
                {
                    name: 'Docker',
                    icon: 'docker',
                    knowledge: 2
                },
            ]
        },
    ]

    return (
        <section id="skills" className="h-screen bg-(--secondary) flex flex-col">
            <Title primary title="Skills" />
            <div className="lg:grid lg:grid-cols-8 lg:grid-rows-2 flex flex-col items-center gap-4 my-auto lg:w-[70%] w-full m-auto lg:pb-30">
                {data.map((skillData) =>
                    <RetroWindow key={skillData.name} title={skillData.name} extraStyling={skillData.nbrCol + ' w-fit lg:w-auto'} primary body={
                        <div className="flex gap-[20px] px-5 lg:px-o lg:gap-0 lg:m-3 justify-around items-center">
                            {skillData.stack.map((item) => <IconCard key={item.icon} icon={item.icon} name={item.name} knowledge={item.knowledge} />)}
                        </div>
                    } />
                )}
            </div>

        </section>
    )
}