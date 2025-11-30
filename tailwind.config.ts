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
        ocean: {
          deep: '#0A2463',
          medium: '#1E3A8A',
        },
        cyan: {
          primary: '#06B6D4',
          light: '#22D3EE',
        },
        coral: '#FF6B6B',
        seafoam: '#4ECDC4',
        teal: '#14B8A6',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(6, 182, 212, 0.4)',
        'coral-glow': '0 0 20px rgba(255, 107, 107, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
