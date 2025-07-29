'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";


export default function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="header-button"
        >
            {theme === 'dark' ? <BsSunFill/> : <BsMoonStarsFill/>}
        </button>
    );
}