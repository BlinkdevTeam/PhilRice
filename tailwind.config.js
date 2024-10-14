/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        left: "-8px 8px 10px rgba(0, 0, 0, 0.4)", // Example shadow
      },
    },
  },
  plugins: [],
};
