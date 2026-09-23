import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Base font sizes
    "text-[2px]",
    "text-[4px]",
    "text-[6px]",
    "text-[8px]",
    "text-[10px]",
    "text-[12px]",
    "text-[14px]",
    "text-[16px]",
    "text-[18px]",
    "text-[20px]",
    "text-[22px]",
    "text-[24px]",
    "text-[26px]",
    "text-[28px]",
    "text-[30px]",
    // Small breakpoint font sizes
    "sm:text-[2px]",
    "sm:text-[4px]",
    "sm:text-[6px]",
    "sm:text-[8px]",
    "sm:text-[10px]",
    "sm:text-[12px]",
    "sm:text-[14px]",
    "sm:text-[16px]",
    "sm:text-[18px]",
    "sm:text-[20px]",
    "sm:text-[22px]",
    "sm:text-[24px]",
    "sm:text-[26px]",
    "sm:text-[28px]",
    "sm:text-[30px]",
    // Medium breakpoint font sizes
    "md:text-[2px]",
    "md:text-[4px]",
    "md:text-[6px]",
    "md:text-[8px]",
    "md:text-[10px]",
    "md:text-[12px]",
    "md:text-[14px]",
    "md:text-[16px]",
    "md:text-[18px]",
    "md:text-[20px]",
    "md:text-[22px]",
    "md:text-[24px]",
    "md:text-[26px]",
    "md:text-[28px]",
    "md:text-[30px]",
    // Large breakpoint font sizes
    "lg:text-[2px]",
    "lg:text-[4px]",
    "lg:text-[6px]",
    "lg:text-[8px]",
    "lg:text-[10px]",
    "lg:text-[12px]",
    "lg:text-[14px]",
    "lg:text-[16px]",
    "lg:text-[18px]",
    "lg:text-[20px]",
    "lg:text-[22px]",
    "lg:text-[24px]",
    "lg:text-[26px]",
    "lg:text-[28px]",
    "lg:text-[30px]",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      keyframes: {
        float: {
          "0%": {
            transform:
              "translateY(var(--float-start, 0px)) rotate(var(--rotate))",
          },
          "50%": {
            transform:
              "translateY(calc(-12px + var(--float-start, 0px))) rotate(var(--rotate))",
          },
          "100%": {
            transform:
              "translateY(var(--float-start, 0px)) rotate(var(--rotate))",
          },
        },
        floatPopUp: {
          "0%": {
            transform:
              "translateY(var(--float-start, 0px)) rotate(var(--rotate))",
          },
          "50%": {
            transform:
              "translateY(calc(-8px + var(--float-start, 0px))) rotate(var(--rotate))",
          },
          "100%": {
            transform:
              "translateY(var(--float-start, 0px)) rotate(var(--rotate))",
          },
        },
        pulse: {
          "50%": {
            opacity: "0.5",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-15%)",
            animationTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        menuCurtainOpen: {
          "0%": {
            opacity: "0",
            transform: "scaleY(0)",
            transformOrigin: "top",
          },
          "100%": {
            opacity: "1",
            transform: "scaleY(1)",
            transformOrigin: "top",
          },
        },
        menuCurtainClose: {
          "0%": {
            transform: "scaleY(1)",
            transformOrigin: "top",
          },
          "100%": {
            transform: "scaleY(0)",
            transformOrigin: "top",
          },
        },
      },
      animation: {
        float: "float var(--float-duration, 6s) ease-in-out infinite",
        floatPopUp: "floatPopUp var(--float-duration, 6s) ease-in-out infinite",
        pulse: "pulse 3s infinite",
        bounce: "bounce 2s infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
        spin: "spin 3s linear infinite",
        "menu-curtain-open":
          "menuCurtainOpen 0.45s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "menu-curtain-close":
          "menuCurtainClose 0.45s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        // animation: name duration timing-function iteration-count;
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

export default config;
