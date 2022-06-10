module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontSize: {
        'my-sm': ['60px', {
          lineHeight: '1rem',
        }],
      },
    },
  },
  plugins: [],
}
