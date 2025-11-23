/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-pink': '#FFE5E5',
        'wedding-rose': '#FFB6C1',
        'wedding-cream': '#FFF8E7',
        'wedding-beige': '#F5E6D3',
        'wedding-gold': '#FFD700',
      },
      fontFamily: {
        'script': ['"Dancing Script"', 'cursive'],
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

