/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '32': '32px'
      },
      boxShadow: {
        'custom': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      backgroundColor: {
        'custom': '#6c6a6a',
        'hover': '#e0d4d4'
      },
    },
  },
  plugins: [],
}

