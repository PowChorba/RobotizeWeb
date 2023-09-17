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
        'lightBlack' : 'rgba(240, 255, 255, 0)'
        // 'lightBlack' : 'rgba(0, 0, 0, 0.500)'
      },
      boxShadow: {
        'cardShadow': 'box-shadow: 10px 11px 5px -6px rgba(0,0,0,0.29);'
      },
      keyframes: {
        'slide-right': {
          '0%': {
            left: '-25rem'
          },
          '100%': {
            left: '0rem'
          }
        },
        'slide-left': {
          '0%': {
            left: '0rem',
             
          },
          '100%': {
            left: '-25rem'
          }
        }
      },
      animation: {
        'slide-right': 'slide-right 1s',
        'slide-left': 'slide-left 1s'
      }
    },
  },
  plugins: [],
}
export default config
