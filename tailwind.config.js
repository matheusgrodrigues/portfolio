/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: ['class', '[data-theme="dark"]'],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            colors: {
                'gray-900': '#0D0E0F',
                'gray-600': '#282A2D',
                'purple-300': '#AA88FF',
                'purple-500': '#8B42F0',
                'purple-900': '#9B30F9',
                'slate-300': '#B0B2A8',
                orange: '#FF6622',
                yellow: '#FFD300',
                black: '#000000',
                green: '#23D207',
                white: '#FFFFFF',
                blue: '#119DE6',
                red: '#FF2800',
            },
            fontFamily: {
                sans: ['Rubik', 'sans-serif'],
                serif: ['IBMPlexMono', 'serif'],
            },
            fontSize: {
                sm1: '12px',
                sm2: '14px',
                base: '16px',
                md1: '18px',
                md2: '24px',
                lg1: '28px',
                lg2: '48px',
                xl1: '52px',
                xl2: '56px',
            },
        },
    },
    plugins: [],
};
