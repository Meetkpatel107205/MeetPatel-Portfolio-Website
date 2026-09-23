import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroFrame = ({
  classname,
  children,
}: PropsWithChildren<{ classname?: string }>) => {
  return (
    <div
      className={twMerge(
        "relative border border-[#2546BD]/40 max-w-7xl mx-auto",
        classname
      )}
    >

      <div className="absolute -top-px -left-px pointer-events-none">
        <div className="h-[3px] w-3 bg-[#2546BD]" />
        <div className="w-[3px] h-3 bg-[#2546BD]" />
      </div>

      <div className="absolute -top-px -right-px pointer-events-none">
        <div className="h-[3px] w-3 bg-[#2546BD]" />
        <div className="w-[3px] h-3 bg-[#2546BD] ml-auto" />
      </div>

      <div className="absolute -bottom-px -left-px pointer-events-none">
        <div className="w-[3px] h-3 bg-[#2546BD]" />
        <div className="h-[3px] w-3 bg-[#2546BD]" />
      </div>

      <div className="absolute -bottom-px -right-px pointer-events-none">
        <div className="w-[3px] h-3 bg-[#2546BD] ml-auto" />
        <div className="h-[3px] w-3 bg-[#2546BD]" />
      </div>

      {children}
    </div>
  );
};
