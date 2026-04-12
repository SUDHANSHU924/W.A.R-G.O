/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wargo: {
          bg: '#FAF7F5',
          card: '#FDEEF4',
          border: '#F0B8CE',
          primary: '#1A1A1A',
          secondary: '#9A7A85',
          accent: '#C0577A',
          rose: '#E05585',
          urgent: {
            bg: '#FFF0EC',
            text: '#C03010'
          },
          badge: {
            streak: '#FFE8F0',
            xp: '#EAF6E0'
          }
        }
      },
      borderRadius: {
        'wargo': '20px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
