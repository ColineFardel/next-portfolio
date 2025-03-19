import Title from "./title";
import IconCard from "./icon-card";

export default function Skills() {

    const data = [
        {
            name: 'Database',
            nbrCol: 'col-span-4',
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
            nbrCol: 'col-span-4',
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
            nbrCol: 'col-span-5',
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
            nbrCol: 'col-span-3',
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
            <Title title="Skills" />
            <div className="grid grid-cols-8 grid-rows-2 gap-2 mx-7 my-auto">
                {data.map((skillData) =>
                    <div key={skillData.name} className={'skill-container ' + skillData.nbrCol}>
                        <div className="text-lg font-bold">{skillData.name}</div>
                        <div className="icons-container">
                            {skillData.stack.map((item) => <IconCard key={item.icon} icon={item.icon} name={item.name} knowledge={item.knowledge} />)}
                        </div>
                    </div>
                )}
            </div>

        </section>
    )
}