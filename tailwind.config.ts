import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Additional custom breakpoints
      'touch': { 'raw': '(hover: none) and (pointer: coarse)' },
      'landscape': { 'raw': '(orientation: landscape)' },
      'portrait': { 'raw': '(orientation: portrait)' },
      'retina': { 'raw': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)' },
    },
    extend: {
      colors: {
        // Häagen-Dazs brand colors
        'haagen': {
          'burgundy': '#8B2332',     // Primary brand burgundy/deep red
          'burgundy-dark': '#4A1424', // Darker burgundy for accents
          'burgundy-light': '#8B3A52', // Lighter burgundy
          'gold': '#D4AF37',          // Premium gold
          'gold-light': '#E6C757',    // Light gold
          'gold-dark': '#B8941F',     // Dark gold
          'cream': '#FFF8E7',         // Creamy white background
          'cream-light': '#FFFEF9',   // Very light cream
          'vanilla': '#F5E6D3',       // Vanilla/beige
          'chocolate': '#3E2723',     // Dark chocolate brown
          'white': '#FFFFFF',         // Pure white
          'black': '#1A0F12',         // Rich black
        },
        // Keep the old colors for backward compatibility
        'haagen-red': '#8B2332',
        'haagen-gold': '#D4AF37',
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
        'spin': 'spin 1s linear infinite',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-up': 'scale-up 0.2s ease-out',
      },
      keyframes: {
        'slide-up': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-up': {
          from: { transform: 'scale(0.95)' },
          to: { transform: 'scale(1)' },
        },
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      minHeight: {
        'touch': '44px',
        'touch-sm': '36px',
      },
      fontSize: {
        'responsive-xs': 'clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem)',
        'responsive-sm': 'clamp(0.875rem, 0.8rem + 0.3vw, 1rem)',
        'responsive-base': 'clamp(1rem, 0.9rem + 0.4vw, 1.125rem)',
        'responsive-lg': 'clamp(1.125rem, 1rem + 0.5vw, 1.25rem)',
        'responsive-xl': 'clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)',
        'responsive-2xl': 'clamp(1.5rem, 1.2rem + 1.2vw, 1.875rem)',
        'responsive-3xl': 'clamp(1.875rem, 1.4rem + 1.9vw, 2.25rem)',
        'responsive-4xl': 'clamp(2.25rem, 1.6rem + 2.6vw, 3rem)',
        'responsive-5xl': 'clamp(3rem, 2rem + 4vw, 4rem)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}

export default config