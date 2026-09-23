"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { spaceMono } from "@/fonts/spaceMono";

/* ---------------- TYPES ---------------- */

type ResponsiveFontSize = {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
};

type FontWeight = "normal" | "semibold" | "bold" | "extrabold" | "black";

type HeroLabelProps = {
  children: React.ReactNode;
  rotate?: number;
  borderWidth?: number;
  fontWeight?: FontWeight;
  fontSize?: ResponsiveFontSize;
  className?: string;
  style?: React.CSSProperties;
  animationDelay?: number;
  noHoverDelay?: boolean;
  drag?: boolean;
  dragConstraints?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
};

/* ---------------- HELPERS ---------------- */

const defaultFontSizeClasses = `
  text-[10px]
  md:text-[12px]
  lg:text-[14px]
`;

const resolveFontSize = (fontSize?: ResponsiveFontSize) => {
  if (!fontSize) return defaultFontSizeClasses;

  return [
    fontSize.base,
    fontSize.sm && `sm:${fontSize.sm}`,
    fontSize.md && `md:${fontSize.md}`,
    fontSize.lg && `lg:${fontSize.lg}`,
  ]
    .filter(Boolean)
    .join(" ");
};

export const HeroLabel = ({
  children,
  rotate = 0,
  borderWidth = 1,
  fontWeight = "semibold",
  fontSize,
  className,
  style,
  animationDelay = 0,
  noHoverDelay = false,
  drag = false,
  dragConstraints,
}: HeroLabelProps) => {
  const weightMap: Record<FontWeight, string> = {
    normal: "font-normal",
    semibold: "font-normal",
    bold: "font-bold",
    extrabold: "font-bold",
    black: "font-bold",
  };

  const strokeMap: Record<FontWeight, string> = {
    normal: "",
    semibold: "",
    bold: "",
    extrabold: "[-webkit-text-stroke:0.4px_#2546BD]",
    black: "[-webkit-text-stroke:0.8px_#2546BD]",
  };

  return (
    /* OUTER → drag + layout measurement */
    <motion.div
      layout
      drag={drag}
      dragConstraints={dragConstraints}
      dragElastic={0.15}
      dragMomentum={false}
      className={twMerge(
        `
        absolute
        inline-block
        cursor-grab active:cursor-grabbing
        `,
        className
      )}
    >
      {/* INNER → hover scale ONLY */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 0.45,
          delay: noHoverDelay ? 0 : animationDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* INNERMOST → float animation ONLY */}
        <div
          style={
            {
              "--rotate": `${rotate}deg`,
              borderWidth,
              animationDelay: `${animationDelay}s`,
              ...style,
            } as React.CSSProperties
          }
          className={twMerge(
            `
            px-3 py-1.5
            md:px-4 md:py-2
            lg:px-5 lg:py-2.5

            cursor-pointer

            font-mono
            border border-[#2546BD]
            bg-[#fdf9f2]

            uppercase tracking-widest
            text-[#2546BD]

            shadow-[3px_3px_0_0_#2546BD]
            md:shadow-[4px_4px_0_0_#2546BD]

            animate-float
            will-change-transform
            `,
            spaceMono.className,
            weightMap[fontWeight],
            strokeMap[fontWeight],
            resolveFontSize(fontSize)
          )}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};
