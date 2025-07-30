/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
                bit_count: ['var(--font-bit-count)', 'sans-serif'],
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};