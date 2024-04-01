/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%'
      },
      margin: {
        '1/4': '25%'
      },
      screens: {
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra-large screens
      },
      height: {
        '80vh': '80vh'
      },
      width: {
        '5%': '5%',
        '3%': '3%'
      },
      colors: {
        // blue
        primary: "#328cc1",
        // purple
        secondary: "#452c63",
        // darkerblue
        primaryDark: "#083c5d",
        // blueGray
        accentBlue: "#1d2731",
        // lightGray
        accentGray: "#aaaaaa",
        // offwhite
        background: "#FAF9F6",
        // palermoPink
        accentPink: "#eec0c8",
        // eggshell white,
        eggShell: "#FAF9F6"
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss"
  ],
};
