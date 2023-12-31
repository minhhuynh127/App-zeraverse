import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 7 row grid
        "7": "repeat(7, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
      },
      // gridColumnStart: {
      //   "13": "13",
      //   "14": "14",
      //   "15": "15",
      //   "16": "16",
      //   "17": "17",
      // },
      // gridColumnEnd: {
      //   "13": "13",
      //   "14": "14",
      //   "15": "15",
      //   "16": "16",
      //   "17": "17",
      // },
      backgroundImage: {
        bgBannerGs: "url(/images/game-screen/bg-banner.png)",
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
        backgroundShine: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        fadeInModalEdit: {
          "0%": { transform: "scale(0.7)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeOutModalEdit: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.7)", opacity: "0" },
        },
        fadeIn: {
          "0%": { top: "83px", opacity: "0" },
          "100%": { top: "63px", opacity: "1" },
        },
        bottomToTop: {
          "0%": { bottom: "-200px", opacity: "0" },
          "100%": { bottom: "-150px", opacity: "1" },
        },
        translateFadeIn: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        openSearch: {
          "0%": { transform: "translateX(-400px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        closeSearch: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-400px)", opacity: "0" },
        },
        openCategory: {
          "0%": { height: "0", opacity: "0" },
          "100%": { height: "270px", opacity: "1" },
        },
        closeCategory: {
          "0%": { height: "270px" },
          "100%": { height: "0" },
        },
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        opacityOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },

        openCreatePlaylist: {
          "0%": { height: "40px" },
          "100%": { height: "131px" },
        },
        closeCreatePlaylist: {
          "0%": { height: "131px" },
          "100%": { height: "40px" },
        },
        openDelPlaylist: {
          "0%": { width: "0px", opacity: "0" },
          "100%": { width: "100px", opacity: "1" },
        },
        closeDelPlaylist: {
          "0%": { width: "100px", opacity: "1" },
          "100%": { width: "0px", opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn both 0.4s",
        translateFadeIn: "translateFadeIn both 1s",
        openSearch: "openSearch linear 0.4s",
        closeSearch: "closeSearch linear 0.4s",
        opacity: "opacity linear 0.4s",
        opacityOut: "opacityOut linear 0.4s",
        openCategory: "openCategory linear 0.4s",
        closeCategory: "closeCategory linear 0.4s",
        bottomToTop: "bottomToTop linear 0.4s",
        backgroundShine: "backgroundShine 2s linear infinite",
        fadeInModalEdit: "fadeInModalEdit linear 0.4s",
        fadeOutModalEdit: "fadeOutModalEdit linear 0.4s",
        openCreatePlaylist: "openCreatePlaylist linear 0.2s",
        closeCreatePlaylist: "closeCreatePlaylist linear 0.2s",
        openDelPlaylist: "openDelPlaylist linear 0.2s",
        closeDelPlaylist: "closeDelPlaylist linear 0.2s",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
export default config;
