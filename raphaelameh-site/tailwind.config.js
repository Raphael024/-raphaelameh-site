/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1B2D',
          mid: '#162236',
          light: '#1E2D44',
        },
        gold: {
          DEFAULT: '#B8860B',
          soft: 'rgba(184,134,11,0.10)',
          glow: 'rgba(184,134,11,0.06)',
        },
        cream: '#FAF9F6',
        warm: '#F3EDE4',
        border: {
          DEFAULT: '#E5E0DA',
          light: '#F0EBE4',
        },
        muted: '#5C5C5C',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.6875rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
