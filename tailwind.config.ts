import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkRed: "#780000",
        lightRed: "#C1121F",
        lightPastel: "#FDF0D5",
        darkBlue: "#003049",
        lightBlue: "#669BBC",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animate")],
};
export default config;
