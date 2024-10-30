/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "banner": "url('src/assets/banner.png')",
      },
      colors:{
        primary:'#F40404'
      }
    },
  },
  plugins: [],
};
