const tailwindConfigJS = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;


const directivesForIndexCSS = `@tailwind base;
@tailwind components;
@tailwind utilities;

`





export  {tailwindConfigJS, directivesForIndexCSS}



