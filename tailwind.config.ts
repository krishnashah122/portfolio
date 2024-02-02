import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      display: ["group-hover"],
      colors: {
        'background-color': 'var(--background-color)',
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'light-text': 'var(--light-text)',
        'light-color': 'var(--light-color)',
        'dark-color': 'var(--dark-color)',
        'dark-primary': 'var(--dark-primary)',
        'dark-secondary': 'var(--dark-secondary)',
        'dark-text': 'var(--dark-text)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'abril': ['Abril Fatface', 'serif'],
      }
    },
  },
  plugins: [],
}
export default config
