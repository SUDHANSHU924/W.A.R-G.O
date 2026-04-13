/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme
        background: '#0A0A0B',
        'card-dark': '#1a1f3a',
        'card-border': '#2a3050',
        foreground: '#FFFFFF',
        
        // Light theme
        'bg-light': '#FAF7F5',
        'card-light': '#FDEEF4',
        'border-light': '#F0B8CE',
        'text-light': '#1A1A1A',
        'text-muted-light': '#9A7A85',
        
        // Brand colors
        wargo: {
          primary: '#0066FF',
          secondary: '#A855F7',
          accent: '#FF6B35',
          success: '#10B981',
          danger: '#EF4444',
          muted: '#8B92B0',
          'rose-pink': '#C0577A',
          'rose-light': '#FDEEF4',
          'rose-accent': '#E05585',
        },
        card: {
          DEFAULT: 'rgba(23, 23, 26, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0, 102, 255, 0.2)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.2)',
        'glow-rose': '0 0 30px rgba(224, 85, 133, 0.2)',
        'card': '0 20px 40px rgba(0, 0, 0, 0.3)',
        'card-light': '0 10px 25px rgba(192, 87, 122, 0.08)',
      },
      backdropBlur: {
        'xl': '20px',
      },
      animation: {
        'glow': 'glow 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.5, filter: 'blur(20px)' },
          '50%': { opacity: 0.8, filter: 'blur(25px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      }
    },
  },
  plugins: [],
};
