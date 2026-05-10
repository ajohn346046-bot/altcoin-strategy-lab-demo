/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08111F',
        teal: '#147D74',
        mint: '#CFF8EC',
        amber: '#D88B22',
        paper: '#F6F7F2',
      },
      boxShadow: {
        glow: '0 26px 80px rgba(20, 125, 116, 0.18)',
      },
    },
  },
  plugins: [],
};
