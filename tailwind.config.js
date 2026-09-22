/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Neue Montreal"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#080706',
        paper: '#f4efe5',
        ember: '#d65f2f',
        gold: '#d9b46d',
        moss: '#6f7f4f',
      },
      boxShadow: {
        glow: '0 18px 80px rgba(214, 95, 47, 0.18)',
      },
    },
  },
  plugins: [],
};
