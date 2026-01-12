/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#050910',
        'surface-2': '#0b1220',
        'surface-3': '#121a2e',
        accent: '#22c55e',
        accent2: '#0ea5e9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 25px 60px -20px rgba(0,0,0,0.45)',
        card: '0 15px 40px -18px rgba(15,23,42,0.6)',
      },
      backgroundImage: {
        'grid-soft':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
        'fade-gradient':
          'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(14,165,233,0.12) 50%, rgba(94,234,212,0.12) 100%)',
      },
    },
  },
  plugins: [],
}

