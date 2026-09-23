"use client";

import { useEffect, useState } from "react";
import { breakpoints } from "@/config/breakpoints";

export type Breakpoint = "base" | "sm" | "md" | "lg";

export const useTailwindBreakpoint = (): Breakpoint => {
  const [bp, setBp] = useState<Breakpoint>("lg");

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      if (width < breakpoints.sm) {
        setBp("base");          // 0–374
      } else if (width < breakpoints.md) {
        setBp("sm");            // 375–767
      } else if (width < breakpoints.lg) {
        setBp("md");            // 768–1199
      } else {
        setBp("lg");            // 1200+
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return bp;
};
