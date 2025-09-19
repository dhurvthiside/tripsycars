/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "royal-blue": {
          600: "#023871ff", // Royal Blue
          700: "#0d192bff", // Darker Royal Blue
        },
        "gold": {
          500: "#f2d884"
        }
      },
    },
  },
  plugins: [],
};
