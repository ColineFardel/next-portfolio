import Title from "./title";
import IconCard from "./icon-card";

export default function Skills() {

    const icons = {
        database: ['./firebase.svg', './postgre.svg', './database.svg'],
        frontend: ['./react.svg', './angular.svg', './css.svg', './html.svg', './ts.svg'],
        backend: ['./java.svg', './spring.svg', './js.svg'],
        other: ['./jira.svg', './docker.svg']
    }

    return (
        <section id="skills" className="h-screen bg-(--secondary) flex flex-col justify-start">
            <Title title="Skills" />
            <div className="grid grid-cols-6 grid-rows-2 gap-2 m-7">
                <div className="col-span-3 skill-container">
                    Database
                    <div className="flex justify-around items-center">
                        {icons.database.map((icon) => <IconCard key={icon} icon={icon} />)}
                    </div>
                </div>
                <div className="col-span-3 skill-container">
                    Backend
                    <div className="flex justify-around items-center">
                        {icons.backend.map((icon) => <IconCard key={icon} icon={icon} />)}
                    </div>
                </div>
                <div className="col-span-4 skill-container">
                    Frontend
                    <div className="flex justify-around items-center">
                        {icons.frontend.map((icon) => <IconCard key={icon} icon={icon} />)}
                    </div>
                </div>
                <div className="col-span-2 skill-container">
                    Other
                    <div className="flex justify-around items-center">
                        {icons.other.map((icon) => <IconCard key={icon} icon={icon} />)}
                    </div>
                </div>
            </div>

        </section>
    )
}