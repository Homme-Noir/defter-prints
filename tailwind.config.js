/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        gold: '#D4A853',
        cream: '#FDF8F0',
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'print-pattern': 'radial-gradient(circle at center, #D4A853 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
