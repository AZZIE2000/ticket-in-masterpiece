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
        kohli: "#111828",
        good: "#388e3c",
        bad: "#c62828",
      },
      spacing: { "5%": "5%", "10px": "10px", "70px": "70px" },
      backgroundImage: {
        darkLogo: "url('/public/dark_logo.png')",
        lightLogo: "url('/public/Light_logo.png')",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
