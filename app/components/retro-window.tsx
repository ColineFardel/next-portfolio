import { JSX } from "react";


export default function RetroWindow({ title, primary, smallTitle, body, extraStyling }: { title: string,smallTitle?: boolean, primary?: boolean, body: JSX.Element, extraStyling?: string }) {

    const bgColor = primary ? 'bg-(--primary)' : 'bg-(--secondary)';
    const titleSize = smallTitle ? ' text-sm' : ' text-xl';
    const imgSize = smallTitle ? 'w-[10px]' : 'w-[15px]'

    return (
        <div className={"full-container " + extraStyling}>
            <div className={'top-bar ' + bgColor}>
                <div className={"bar-title " + titleSize}>{title}</div>
                <div className="close-container">
                    <img className={imgSize} src="./cross.png" alt="" />
                </div>
            </div>
            {body}
        </div>
    )
}