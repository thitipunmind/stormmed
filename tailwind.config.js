/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxHeight: {
        '128': '20rem', // Custom maximum value
      },
    },
  },
  plugins: [],
  // theme: {
  //   containerr: {
  //     center: true,
  //     padding: {
  //       DEFAULT: "1rem",
  //       sm: "2rem",
  //       lg: "4rem",
  //       xl: "5rem",
  //       "2xl": "6rem",
  //     },
   // },
  //},
};
