/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        'emerald-premium': '#064e3b',
        'red-cta': '#b91c1c',
        'amber-premium': '#fbbf24',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'confetti': 'confetti 2.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        confetti: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0) rotate(0deg)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(500px) rotate(720deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
