// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,vue,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#00008B',
        foreground: '#f0f2f5',
        card: '#141a1f',
        primary: '#20b2a6',
        'primary-foreground': '#ffffff',
        secondary: '#1f2830',
        'secondary-foreground': '#20b2a6',
        muted: '#252e37',
        'muted-foreground': '#7a8491',
        border: '#242b32',
        highlight: '#f5a623',
        surface: '#1a2329',
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
  },
  plugins: [],
};