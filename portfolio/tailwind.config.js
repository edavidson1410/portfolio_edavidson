/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryBlue: "#328cc1",
      primaryOrange: "#d98310",
      secondaryBlue: "#083c5d",
      blueGray: "#1d2731",
      lightGray: "#aaaaaa"
    },
    extend: {
      backgroundColor: {
        'global': 'var(--global-bg)',
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
