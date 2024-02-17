/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // blue
      primary: "#328cc1",
      // orange
      secondary: "#d98310",
      // darkerblue
      primaryDark: "#083c5d",
      // blueGray
      accentBlue: "#1d2731",
      // lightGray
      accentGray: "#aaaaaa"
    },
    extend: {
      backgroundColor: {
        'global': 'var(--global-bg)',
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
