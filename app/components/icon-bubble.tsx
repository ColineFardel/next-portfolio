import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconBubble({ icon, position }: any) {
    return (
        <div className={"bg-(--foreground) w-30 h-30 min-w-30 min-h-30 rounded-full flex justify-center items-center " + position}>
            <FontAwesomeIcon className="fa-fw" icon={icon} size="2xl" color="#cae4da" />
        </div>
    )
}