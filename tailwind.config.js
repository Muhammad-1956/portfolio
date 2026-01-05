/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",   // mobile
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px", // 👈 perfect for portfolios
      },
    },

    extend: {
      colors: {
        primary: "#7c3aed",   // violet-600 (matches your theme)
        secondary: "#0f172a", // slate-900
      },
    },
  },
  plugins: [],
};
