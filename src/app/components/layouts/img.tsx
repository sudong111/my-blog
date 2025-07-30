'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import Intro from "@/app/components/layouts/intro";

export default function Img() {
    const { theme } = useTheme()
    const [isVisible, setIsVisible] = useState(false)

    // 전환 효과: 테마가 바뀌면 opacity 효과
    useEffect(() => {
        setIsVisible(false)
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [theme])

    return (
        <div className="flex justify-center relative w-full h-full">
            <Intro />
            <img
                src="https://i.pinimg.com/originals/e1/06/ba/e106bae3c008abea3d0d18c613c31f76.gif"
                className={clsx(
                    'img',
                    theme === 'light' && isVisible ? 'opacity-100' : 'opacity-0'
                )}
                alt="Light"
            />
            <img
                src="https://i.pinimg.com/originals/90/70/32/9070324cdfc07c68d60eed0c39e77573.gif"
                className={clsx(
                    'img',
                    theme === 'dark' && isVisible ? 'opacity-100' : 'opacity-0'
                )}
                alt="Dark"
            />
        </div>
    )
}
