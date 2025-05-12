module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// const { transform } = require("typescript");

// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         slideIn: {
//           "0%": { transform: "translateX(-100%)", opacity: "0" },
//           "100%": { transform: "translateX(0)", opacity: "1" },
//         },
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//       },
//       animation: {
//         slideIn: "slideIn 1s ease-out",
//         fadeIn: "fadeIn 1s ease-in-out",
//       },
//     },
//   },
//   plugins: [],
// };
