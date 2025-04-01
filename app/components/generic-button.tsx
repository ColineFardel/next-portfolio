import { JSX } from "react";



export default function GenericButton({ data, link }: { data: JSX.Element, link: string }) {
    return (
        <a className="button-container" target="_blank" href={link}>
            {data}
        </a>
    )
}