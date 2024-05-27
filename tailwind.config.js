/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         keyframes: {
            animate: {
               from: { transform: "rotate(0deg)" },
               to: { transform: "rotate(360deg)" },
            },
         },
         animation: {
            animate: "animate 5s linear infinite",
         },
      },
   },
   plugins: [],
};
