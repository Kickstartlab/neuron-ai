/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      seagreen: {
        "50": "#09EFD3",
        "100": "#378BA6",
      },
      blue: {
        "50": "#16B5E7",
        "100": "#222E55",
        "200": "#101124"
      },
      black: {
        "50": "#252525",
        "100": "#06071B",
      },
      white: {
        "50": "#F5F5F5",
        "100": "#fff",
      },
      purple: {
        "50": "rgba(233, 70, 218, 0.3)",
        "100": "#B728EA",
      },
      gray: {
        "50": "#959FB3",
        "100": "rgba(114, 114, 114, 0.8);",
      },
    },
    fontFamily: {
      'jakarta': ["'Plus Jakarta Sans', sans-serif"],
      'poppins': ["'Poppins', sans-serif"]
    }
  },
  plugins: [],
}
