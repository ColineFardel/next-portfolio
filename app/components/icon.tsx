'use client'

import { useEffect, useState } from "react"

export default function Icon({ iconName, styles }: { iconName: string, styles: string }) {
    const [iconFolder, setIconFolder] = useState('./dark/')

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIconFolder('./light/')
        }
    }, [])

    return (
        <img className={styles} src={iconFolder + iconName + '.svg'} alt="" />
    )
}