import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#0E1217',
        'near-black': '#0B0F14',
        'accent-glow': '#FF3366',
        'text-secondary': '#C9D1D9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-subtle': '0 0 20px rgba(255, 51, 102, 0.3)',
        'glow-strong': '0 0 40px rgba(255, 51, 102, 0.5)',
        'wheel-drop': '0 20px 60px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

