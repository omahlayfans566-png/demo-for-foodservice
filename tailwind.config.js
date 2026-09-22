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
        // Base palette — warm Nigerian earth tones
        ink: '#0e0b08',        // Deep warm black
        paper: '#f5efe4',      // Warm cream
        ember: '#e8622a',      // Primary orange-red
        gold: '#c89840',       // Rich Nigerian gold
        moss: '#5a6e3a',       // Earthy green
        spice: '#b34020',      // Deeper spice red
        sand: '#e8d4b0',       // Light sand/neutral
        charcoal: '#1e1810',   // Dark section bg
      },
      boxShadow: {
        glow: '0 12px 60px rgba(232, 98, 42, 0.22)',
        'glow-lg': '0 24px 80px rgba(232, 98, 42, 0.28)',
        'card': '0 4px 24px rgba(14, 11, 8, 0.18)',
        'card-hover': '0 12px 40px rgba(14, 11, 8, 0.32)',
      },
      borderRadius: {
        'card': '4px',
      },
    },
  },
  plugins: [],
};
