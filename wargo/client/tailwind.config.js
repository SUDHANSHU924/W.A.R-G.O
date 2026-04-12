/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0B',
        foreground: '#FFFFFF',
        card: {
          DEFAULT: 'rgba(23, 23, 26, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        wargo: {
          primary: '#6366F1', // Indigo/Blue
          secondary: '#A855F7', // Purple
          accent: '#F97316', // Orange
          success: '#10B981', // Emerald
          danger: '#EF4444', // Red
          muted: '#71717A',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'glow': 'glow 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.5, filter: 'blur(20px)' },
          '50%': { opacity: 0.8, filter: 'blur(25px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
