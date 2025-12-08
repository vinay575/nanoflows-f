/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '360px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-card': '#071021',
        'dark-lighter': '#1a1a1a',
        'electric-blue': '#00F0FF',
        'electric-green': '#00E881',
        'accent-red': '#EB3232',
        'accent-blue': '#007BFF',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.6vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3rem)',
        'fluid-5xl': 'clamp(2.5rem, 2rem + 2.5vw, 3.5rem)',
        'fluid-6xl': 'clamp(3rem, 2.25rem + 3.75vw, 4.5rem)',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
        'responsive-xs': 'clamp(0.25rem, 0.5vw, 0.5rem)',
        'responsive-sm': 'clamp(0.5rem, 1vw, 1rem)',
        'responsive-md': 'clamp(1rem, 2vw, 1.5rem)',
        'responsive-lg': 'clamp(1.5rem, 3vw, 2.5rem)',
        'responsive-xl': 'clamp(2rem, 4vw, 4rem)',
        'responsive-2xl': 'clamp(3rem, 5vw, 6rem)',
      },
      minHeight: {
        'touch': '2.75rem',
        'touch-lg': '3rem',
        'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
      },
      minWidth: {
        'touch': '2.75rem',
      },
      maxWidth: {
        'readable': '65ch',
        'content': 'min(100%, 80rem)',
        'container-sm': '40rem',
        'container-md': '48rem',
        'container-lg': '64rem',
        'container-xl': '80rem',
        'container-2xl': '96rem',
      },
      width: {
        'fit-content': 'fit-content',
        'max-content': 'max-content',
        'min-content': 'min-content',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'fade-in-down': 'fadeInDown 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'menu-open': 'menuOpen 0.35s ease-out',
        'menu-close': 'menuClose 0.25s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-1.25rem)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(0.625rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-0.625rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(1.25rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-1.25rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        menuOpen: {
          '0%': { opacity: '0', transform: 'translateY(-0.5rem) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        menuClose: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-0.5rem) scale(0.98)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'mobile-menu': '0 0.625rem 2.5rem -0.625rem rgba(0, 0, 0, 0.3)',
        'mobile-menu-dark': '0 0.625rem 2.5rem -0.625rem rgba(0, 240, 255, 0.15)',
        'responsive': '0 0.25rem 1rem rgba(0, 0, 0, 0.1)',
        'responsive-lg': '0 0.5rem 2rem rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'responsive': 'clamp(0.5rem, 1.5vw, 1rem)',
        'responsive-lg': 'clamp(0.75rem, 2vw, 1.5rem)',
      },
      gap: {
        'responsive': 'clamp(0.75rem, 2vw, 1.5rem)',
        'responsive-lg': 'clamp(1rem, 3vw, 2rem)',
      },
    },
  },
  plugins: [],
};
