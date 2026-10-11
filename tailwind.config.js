/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Preflight is off so Tailwind's reset does not change the existing design.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#ff2a1a', dark: '#c81a10' },
        ink: '#0a0a0a',
        card: '#161616',
      },
      keyframes: {
        pop: {
          from: { opacity: '0', transform: 'translateY(14px) scale(.97)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: { pop: 'pop .22s ease-out' },
    },
  },
  plugins: [],
}
