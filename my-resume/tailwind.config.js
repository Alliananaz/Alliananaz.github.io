/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        film:   '#24251f',
        sprocket: '#f1f2ea',
        paper:  '#fdfdfb',
        ink:    { DEFAULT: '#3f3f37', body: '#55554b', mute: '#8a8a7c', dim: '#9a9a8c' },
        amber:  { DEFAULT: '#d9a441', text: '#b4842c', deep: '#8a6a1f', dot: '#c9a44a' },
        chrome: { DEFAULT: '#8a8d93', dark: '#7e8188', light: '#9a9da3' },
        edge:   '#a8aa9c',
      },
      fontFamily: {
        shadows: ['"Shadows Into Light"', 'cursive'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'light-table': 'radial-gradient(90% 60% at 50% 20%, #fdfdfb 0%, #eceef0 55%, #d7dade 100%)',
      },
      boxShadow: {
        strip: '0 8px 18px rgba(20,22,28,.16)',
        card:  '0 10px 22px rgba(20,22,28,.08)',
      },
      transitionTimingFunction: { reveal: 'cubic-bezier(.4,0,.2,1)' },
    },
  },
  plugins: [],
}

