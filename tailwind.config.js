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
        dark: {
          bg: '#050505',
          secondary: '#101010',
          card: '#121214',
          cardHover: '#18181B',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(57, 255, 136, 0.3)',
        },
        accent: {
          neon: '#39FF88',
          emerald: '#00C853',
          darkEmerald: '#007A33',
          glow: 'rgba(57, 255, 136, 0.15)',
        },
        content: {
          main: '#F5F5F5',
          muted: '#A1A1AA',
          subtle: '#71717A',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Geist Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(57, 255, 136, 0.15)',
        'glow-md': '0 0 30px rgba(57, 255, 136, 0.22)',
        'glow-lg': '0 0 50px rgba(57, 255, 136, 0.3)',
        'apple-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
