/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      blue: {
        100: '#1bbcd1',
        200: '#1d8491',
        300: '#185b63',
        400: '#12383d',
        500: '#0d1d1f',
      },
      grey: {
        100: '#dce4e6',
        200: '#b6bebf',
        300: '#7e8687',
        400: '#4b4f4f',
        500: '#2c2e2e',
      },
      gold: '#c99d22',
    },
    fontFamily: {
      'sans': [],
    }
  },
  plugins: [],
};
