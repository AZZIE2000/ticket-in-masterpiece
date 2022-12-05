/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#150050",
        grape: "#3F0071",
        candy: "#FB2576",
        duaa: "#111828",
      },
      spacing: { "5%": "5%", "10px": "10px", "70px": "70px" },
      backgroundImage: { pp: "url('../public/ppg.jpg')" },
      // boxShadow: {
      //   "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      // },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
