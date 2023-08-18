import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        innerBtn:
          "rgb(0,0,0,0.4) -2px -2px 5px 0px inset, rgb(0,0,0,0.4) 2px 2px 3px 0px inset",
        inner1: "rgba(0, 0, 0, 0.2) 0px 3px 3px 0px inset;",
        inner2: "rgba(255,255,255, 0.4) 0px 0px 25px 10px;",
        dailyGrift:
          "0 10px 6px 2px rgb(0,0,0,0.1), rgb(0,0,0,0.2) 1px 1px 4px 0px inset, rgb(0,0,0,0.2) -1px 0 4px 0px inset",
      },
      backgroundImage: {
        body: "url(/images/bg-body.png)",
        footer: "url(/images/footer-bg.png)",
        trending: "url(/images/bg-trending.png)",
        login: "url(/images/bg-login.png)",
        checkbox: "url(/images/icons/checkbox.png)",
        "top-bar": "url(/images/bg-topbar.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "violet-50": "#F5F3FF",
        "violet-100": "#EDE9FE",
        "violet-200": "#DDD6FE",
        "violet-300": "#C4B5FD",
        "violet-400": "#A78BFA",
        "violet-500": "#8B5CF6",
        "violet-600": "#7C3AED",
        "violet-700": "#6D28D9",
        "violet-800": "#5B21B6",
        "violet-900": "#4C1D95",
        "pink-50": "#FDF2F8",
        "pink-100": "#FCE7F3",
        "pink-200": "#FBCFE8",
        "pink-300": "#F9A8D4",
        "pink-400": "#F472B6",
        "pink-500": "#EC4899",
        "pink-600": "#DB2777",
        "pink-700": "#BE185D",
        "pink-800": "#9D174D",
        "pink-900": "#831843",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        nunito: ["var(--font-nunito)"],
        inter: ["var(--font-inter)"],
      },

      keyframes: {
        fadeIn: {
          "0%": { translateX: "-740px" },
          "100%": { translateX: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 4s ease-in-out linear",
      },
    },
  },
  plugins: [],
};
export default config;
