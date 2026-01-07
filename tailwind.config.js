/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Vulkan Forge Palette (Referencing CSS Variables)
                primary: 'var(--color-primary)',
                surface: 'var(--color-surface)',
                accent: {
                    DEFAULT: 'var(--color-accent)',
                    light: 'var(--color-accent-light)',
                    dark: 'var(--color-accent-dark)',
                },
                main: 'var(--color-text-main)', // Text Main
                muted: 'var(--color-text-muted)', // Text Muted

                // Mappings
                forge: {
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: 'var(--color-surface)',
                    900: '#1c1917',
                    950: 'var(--color-primary)',
                },
                magma: {
                    500: 'var(--color-accent)',
                    600: 'var(--color-accent-dark)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                display: ['Inter', 'sans-serif'],
            },
            screens: {
                'print': { 'raw': 'print' },
            }
        },
    },
    plugins: [],
}
