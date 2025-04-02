import { JSX } from "react";
import Icon from "./icon";


export default function RetroWindow({ title, primary, smallTitle, body, extraStyling }: { title: string, smallTitle?: boolean, primary?: boolean, body: JSX.Element, extraStyling?: string }) {

    const bgColor = primary ? 'bg-(--primary)' : 'bg-(--secondary)';
    const titleSize = smallTitle ? ' text-xs sm:text-sm' : ' text-xs sm:text-sm md:text-xl';
    const imgSize = smallTitle ? 'w-[10px] h-[10px]' : 'w-[15px] h-[15px]'

    return (
        <div className={"full-container " + extraStyling}>
            <div className={'top-bar ' + bgColor}>
                <div className={"bar-title " + titleSize}>{title}</div>
                <div className="close-container">
                    <Icon styles={imgSize} iconName="cross" />
                </div>
            </div>
            {body}
        </div>
    )
}