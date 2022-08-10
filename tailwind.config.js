const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    ripple: (theme) => ({
      colors: theme("colors"),
      darken: 0.1,
    }),
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: colors.gray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      body: ["Roboto", "sans-serif"],
    },
    backgroundImage: {
      "round-table": "url('https://i.upanh.org/2022/08/09/mainbg_01.jpg')",
      party: "url('https://i.upanh.org/2022/08/09/mainbg_03.jpg')",
      group: "url('https://i.upanh.org/2022/08/09/mainbg_02.jpg')",
      adventure: "url('https://i.upanh.org/2022/08/09/sensei_act01.jpg')",
      hexa1: "url('https://i.upanh.org/2022/08/09/biwakox_hexa.png')",
      hexa2: "url('https://i.upanh.org/2022/08/09/prusa_printer_edit.png')",
      hexa3: "url('https://i.upanh.org/2022/08/09/cataro_hexa_sm.png')",
    },
    backgroundSIze: {
      90: "90%",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tw-elements/dist/plugin"),
    require("tailwindcss-ripple")(),
  ],
};
