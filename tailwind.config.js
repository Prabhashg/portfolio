/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-black': '#020A13',
        'article': "#c6c6c6",
        'header': "#E1E1E1",
        'bg-button': "#343a40",
        'bg-tags': "rgba(104, 103, 104, 0.7)",
        'sidebar': "#3f566e",

      },
      fontFamily: {
        'Lato': 'Lato',
        'monos': 'Chivo Mono', 
        'ultra':'Ultra',
      }
    },
  },
  plugins: [],
}

