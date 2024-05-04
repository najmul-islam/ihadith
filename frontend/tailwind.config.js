/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2A9E76",
          100: "#EBFCF6",
          200: "#47B891",
        },
      },
      fontFamily: {
        kalpurush: ["var(--kalpurush)"],
        inter: ["var(--inter)"],
        kfgq: ["var(--kfgq)"],
      },
    },
  },
  plugins: [],
};
