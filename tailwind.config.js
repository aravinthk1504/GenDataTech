/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4f8ef7',
          teal: '#00d4aa',
          ink: '#0b1220',
          slate: '#5b6472',
          mist: '#f4f7fb',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4f8ef7 0%, #00d4aa 100%)',
      },
    },
  },
  plugins: [],
}
