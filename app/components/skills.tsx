import IconBubble from "./icon-bubble";
import { faCss3Alt, faJava, faJs, faJira, faDocker, faAngular, faReact, faHtml5, faNodeJs } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {

    return (
        <section id="skills" className="h-screen bg-(--secondary) flex flex-col">
            <h1 className="section-title">Skills</h1>
            <div className="divider"></div>
            <div className="relative">
                <div>Frontend</div>
                <IconBubble icon={faAngular} position='absolute left-[50%]'/>
                <IconBubble icon={faReact} />
                <IconBubble icon={faHtml5} />
                <IconBubble icon={faCss3Alt} />
            </div>
            <div>
                <div>Backend</div>
                <IconBubble icon={faJava} />
                <IconBubble icon={faJs} />
                <IconBubble icon={faNodeJs} />
            </div>
            <IconBubble icon={faJira} />
            <IconBubble icon={faDocker} />
        </section>
    )
}