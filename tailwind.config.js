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
        editorial: {
          bg: '#ffffff',
          surface: '#fafafa',
          subtle: '#f4f4f5',
          border: '#e4e4e7',
          borderDark: '#18181b',
          dark: '#000000',
          text: '#09090b',
          muted: '#52525b',
          dim: '#71717a',
        },
        content: {
          main: '#09090b',
          muted: '#52525b',
          subtle: '#71717a',
        }
      },
      fontFamily: {
        sans: ['Geist', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        display: ['Geist', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-fluid': 'clamp(2.75rem, 8.5vw, 6.75rem)',
        'hero-sub-fluid': 'clamp(2.5rem, 8vw, 6.25rem)',
        'section-fluid': 'clamp(2rem, 5vw, 3.5rem)',
      },
      boxShadow: {
        'soft-sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 4px 16px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 12px 32px rgba(0, 0, 0, 0.06)',
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.025em',
        'widest-pill': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
