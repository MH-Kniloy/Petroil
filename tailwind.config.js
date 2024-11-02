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
        "service1": "url('src/assets/service1.png')",
        "service2": "url('src/assets/service2.png')",
        "service3": "url('src/assets/service3.png')",
        "ourcompany": "url('src/assets/ourcompanybg.png')",
        "blog1": "url('src/assets/blog1.png')",
        "blog2": "url('src/assets/blog2.png')",
        "blog3": "url('src/assets/blog3.png')",
      },
      colors:{
        primary:'#F40404'
      }
    },
  },
  plugins: [],
};
