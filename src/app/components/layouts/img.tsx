'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

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
        <div className="relative w-full h-auto">
            <img
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWMzYzY1MWNwdXVpbzFsOWdqMXRjcmY3bDRyM2cxa2gxMnFyNWRjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"
                className={clsx(
                    'img transition-opacity duration-500',
                    theme === 'light' && isVisible ? 'opacity-100' : 'opacity-0'
                )}
                alt="Light"
            />
            <img
                src="https://i.pinimg.com/originals/90/70/32/9070324cdfc07c68d60eed0c39e77573.gif"
                className={clsx(
                    'absolute top-0 left-0 w-full min-h-dvh max-h-dvh object-cover transition-opacity duration-500',
                    theme === 'dark' && isVisible ? 'opacity-100' : 'opacity-0'
                )}
                alt="Dark"
            />
        </div>
    )
}
