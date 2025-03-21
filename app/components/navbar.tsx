'use client'
import { useState } from "react"

export default function Navbar() {
    const [selected, setSelected] = useState('#home');

    const clickSection = (section: string) => {
        console.log(section);
        setSelected(section);
    }

    const classSelected = (section: string) => {
        return section === selected ? 'nav-button active' : 'nav-button';
    }

    return (
        <header className="navbar">
            <a onClick={() => {clickSection('#about')}} href="#about" className={classSelected('#about')}>Home</a>
            <a onClick={() => {clickSection('#skills')}} href="#skills" className={classSelected('#skills')}>Skills</a>
            <a onClick={() => {clickSection('#projects')}} href="#projects" className={classSelected('#projects')}>Projects</a>
            <a onClick={() => {clickSection('#experiences')}} href="#experiences" className={classSelected('#experiences')}>Experiences</a>
        </header>
    )
}