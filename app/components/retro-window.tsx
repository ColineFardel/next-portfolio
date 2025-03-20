import { JSX } from "react";


export default function RetroWindow({ title, primary, body }: { title: string, primary?: boolean, body: JSX.Element }) {

    const bgColor = primary ? 'bg-(--primary)' : 'bg-(--secondary)';

    return (
        <div className="full-container">
            <div className={'top-bar ' + bgColor}>
                <div className="bar-title">{title}</div>
                <div className="close-container">
                    <img className="w-[15px]" src="./cross.png" alt="" />
                </div>
            </div>
            {body}
        </div>
    )
}