import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mimi-blue": "#B2DBF1",
        "mimi-pink-light": "#FEE5ED",
        "mimi-pink-blossom": "#FFBFB6",
        "mimi-pink-text": "#826B53",
        "mimi-pink-medium": "#B26460",
        "mimi-pink-dark": "#501F2B",
      },
      fontFamily: {
        Merienda: ["Merienda", "cursive"],
        SansKR: ["Noto Sans KR", "sans-serif"],
        Kufi: ["Playpen Sans", "cursive"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        cuteBounce: {
          "0%, 100%": {
            transform: "translateY(5px)",
            function: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0px)",
            function: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        cuteBounce: 'cuteBounce 1s ease-in-out infinite',
      }
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
