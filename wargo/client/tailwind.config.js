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
        // High-end Light Theme (Elite)
        background: '#FAF7F5',
        foreground: '#1A1A1A',
        card: {
          DEFAULT: '#FDEEF4',
          border: '#F0B8CE',
          hover: '#FCD8E6',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#9A7A85',
          muted: '#B08E9D',
        },
        accent: {
          rose: '#C0577A',
          bold: '#E05585',
          light: '#F4A0C0',
          gradient: {
            start: '#E05585',
            end: '#F4A0C0',
          }
        },
        wargo: {
          primary: '#C0577A',
          secondary: '#D4597A',
          accent: '#E05585',
          success: '#EAF6E0', // Mint success tone
          streak: '#FFE8F0',  // Soft rose background
          urgent: {
            bg: '#FFF0EC',
            text: '#C03010',
          },
          muted: '#9A7A85',
        },
        // Old Legacy for compatibility
        'bg-light': '#FAF7F5',
        'card-light': '#FDEEF4',
        'border-light': '#F0B8CE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif', 'Outfit', 'Montserrat'],
      },
      spacing: {
        '128': '32rem',
        '2xs': '4px',
        'xs': '8px',
        'sm': '12px',
        'md': '20px',
        'lg': '32px',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(192, 87, 122, 0.05)',
        'medium': '0 8px 30px rgba(192, 87, 122, 0.08)',
        'glow-rose': '0 0 20px rgba(224, 85, 133, 0.15)',
        'card': '0 10px 25px rgba(192, 87, 122, 0.08)',
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
