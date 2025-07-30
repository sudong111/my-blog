'use client'

import {useEffect, useState} from "react";

const stack = [
    'Java', 'JavaScript', 'React', 'TypeScript', 'PostgreSQL', 'Next.js', 'JQuery', 'Vite'
]

export default function Intro() {
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')

    useEffect(() => {
        const currentWord = stack[wordIndex]
        const isEndOfWord = charIndex === currentWord.length

        let timeout: ReturnType<typeof setTimeout>

        if (!isEndOfWord) {
            timeout = setTimeout(() => {
                setDisplayText(prev => prev + currentWord[charIndex])
                setCharIndex(prev => prev + 1)
            }, 50)
        } else {
            timeout = setTimeout(() => {
                setCharIndex(0)
                setDisplayText('')
                setWordIndex(prev => (prev + 1) % stack.length)
            }, 1000)
        }

        return () => clearTimeout(timeout)
    }, [charIndex, wordIndex])

    return (
    <div className='intro'>
        <p className='intro-title font-bit'>Hello World !</p>
        <div className='flex w-full justify-center'>
            <p className='font-bit intro-trans text-yellow-300 whitespace-nowrap'>Let`s Get it </p>
            <p className='font-bit intro-trans text-amber-600 ml-8'>{displayText}</p>
            <p className='font-bit intro-trans text-yellow-300 animate-caret-blink'>|</p>
        </div>
    </div>
    );
}