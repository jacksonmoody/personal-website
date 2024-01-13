import type { Config } from "tailwindcss";

const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7BD2F8",
        secondary: "#dee4f8",
        tertiary: "#8892b0",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }: { addVariant: Function }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
export default config;
