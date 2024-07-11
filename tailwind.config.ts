import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wave: {
          '0%': { 'background-position': '100% center' },
          '70%': { 'background-position': '170% center' },
          '100%': { 'background-position': '200% center' },
        }
      },
      animation: {
        'wave': 'wave 2s linear infinite bg-[linear-gradient(to-right,rgb(100,100,100),rgb(200,200,200),rgb(100,100,100))]'
      },
    },
  },
  plugins: []
}
export default config
