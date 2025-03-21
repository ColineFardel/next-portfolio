import { JSX } from "react";



export default function GenericButton({ data, link }: { data: JSX.Element, link: string }) {
    return (
        <a className="w-fit bg-(--secondary) m-3 p-2 border-(--black) border-1 shadow-[-4px_4px_0_0_rgba(30,30,30,0.9)]" target="_blank" href={link}>
            {data}
        </a>
    )
}