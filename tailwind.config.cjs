/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Ubuntu",
      },

      colors: {
        "fem-sky": "#EFF5FF",
        "fem-denim": "#022959",
        "fem-gray": "#9699AA",
        "fem-border": "#D6D9E6",
        "fem-lightgray": "#F8F9FF",
        "fem-purple": "#483EFF",
        "fem-lightblue": "#ABBCFF",
        "fem-error": "#EE374A",
      },
      backgroundImage: {
        "mobile-pattern": "url('./assets/images/bg-sidebar-mobile.svg')",
        "desktop-pattern": "url('./assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
