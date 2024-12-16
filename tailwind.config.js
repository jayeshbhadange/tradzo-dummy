import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // all the colors to be set here.

  theme: {
    extend: {
      // fontFamily: {
      //   inter: ["Inter", "sans-serif"],
      // },

      // keyframes: {
      //   marquee: {
      //     "0%": { transform: "translateX(0)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      //   marqueeReverse: {
      //     "0%": { transform: "translateX(100%)" },
      //     "100%": { transform: "translateX(0)" },
      //   },
      // },
      // animation: {
      //   marquee: "marquee 25s linear infinite",
      //   marqueeReverse: "marqueeReverse 25s linear infinite",
      // },

      screen: {
        "3xl": "1600px",
      },

      colors: {
        // orange primary
        yb: "#3d5a80",
        yb1: "#557BAD",
        yb2: "#A2B7D2",

        pb: "#98c1d9",
        pb1: "#4A92BC",
        pb2: "#B5D2E3",
        pb3: "#ADCEE1",
        pb4: "#C3DBE9",
        pb5: "#DAE9F1",
        pb6: "#E1EDF4",
        pb7: "#F0F6F9",

        bs: "#ee6c4d",
        bs1: "#F8C1B3",
        bs2: "#ED5D39",
        bs3: "#EB4C24",

        gunmetal: "#293241",
        lc: "#e0fbfc",
        night: "#151616",
        seasalt: "#f7f7f7",
        indigo: {
          100: "#cce2fa",
          200: "#99c4f5",
          300: "#66a7f0",
          400: "#3389eb",
          500: "#006ce6",
          600: "#0056b8",
          700: "#00418a",
          800: "#002b5c",
          900: "#00162e",
        },
      },
    },
  },
};
