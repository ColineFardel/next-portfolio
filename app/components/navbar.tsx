'use client'
import { useState } from "react"

export default function Navbar() {
    const [selected, setSelected] = useState('#home');

    const clickSection = (section: string) => {
        console.log(section);
        setSelected(section);
    }

    const classSelected = (section: string) => {
        return section === selected ? 'nav-section selected' : 'nav-section';
    }

    return (
        <header className="fixed mt-5 left-[50%] transform-[translate(-50%,0)] bg-(--foreground) opacity-50 w-fit flex gap-5 pl-5 pr-5 rounded-md">
            <a onClick={() => {clickSection('#about')}} href="#about" className={classSelected('#about')}>Home</a>
            <a onClick={() => {clickSection('#skills')}} href="#skills" className={classSelected('#skills')}>Skills</a>
            <a onClick={() => {clickSection('#projects')}} href="#projects" className={classSelected('#projects')}>Projects</a>
            <a onClick={() => {clickSection('#contact')}} href="#contact" className={classSelected('#contact')}>Contact</a>
        </header>
    )
}