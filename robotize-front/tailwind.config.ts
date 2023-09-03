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
      backgroundColor: {
        'lightBlack' : 'rgba(0, 0, 0, 0.500)'
      },
      boxShadow: {
        'cardShadow': 'box-shadow: 10px 11px 5px -6px rgba(0,0,0,0.29);'
      }
    },
  },
  plugins: [],
}
export default config
