"use client";

import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint";
import type { ResponsiveDragRange } from "@/types/drag";

export const useResponsiveDrag = (ranges: ResponsiveDragRange) => {
  const bp = useTailwindBreakpoint();

  switch (bp) {
    case "base":
      return ranges.base;

    case "sm":
      return ranges.sm;

    case "md":
      return ranges.md;

    case "lg":
    default:
      return ranges.lg;
  }
};
