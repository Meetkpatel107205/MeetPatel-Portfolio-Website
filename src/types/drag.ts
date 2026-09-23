export type DragRange = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

export type ResponsiveDragRange = {
  base: DragRange;
  sm: DragRange;
  md: DragRange;
  lg: DragRange;
};
