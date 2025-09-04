/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'white-95': 'rgba(255, 255, 255, 0.95)',
      },
      colors: {
        orange: {
          200: 'rgba(255, 183, 77, 0.4)',
        }
      }
    },
  },
  plugins: [],
};
