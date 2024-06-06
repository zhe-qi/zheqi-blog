import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react")

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textStroke: {
        '1': '1px',
        '2': '2px',
      },
      textStrokeColor: {
        'black': '#000',
        'white': '#fff',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), function({ addUtilities }: any) {
    const newUtilities = {
      '.text-stroke': {
        '-webkit-text-stroke-width': '1px',
        'text-stroke-width': '1px',
      },
      '.text-stroke-1': {
        '-webkit-text-stroke-width': '1px',
        'text-stroke-width': '1px',
      },
      '.text-stroke-2': {
        '-webkit-text-stroke-width': '2px',
        'text-stroke-width': '2px',
      },
      '.text-stroke-black': {
        '-webkit-text-stroke-color': '#000',
        'text-stroke-color': '#000',
      },
      '.text-stroke-white': {
        '-webkit-text-stroke-color': '#fff',
        'text-stroke-color': '#fff',
      },
    }
    addUtilities(newUtilities)
  }],
};

export default config;
