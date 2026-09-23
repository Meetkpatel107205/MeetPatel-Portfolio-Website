"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

const ToolTip = ({infoText="This is a tooltip", className, children="Hover me"} : {infoText?: string, className?: string, children?: React.ReactNode}) => {
  return (
      <button className={twMerge("relative cursor-pointer text-md group scale-97 hover:scale-105 transition-transform duration-200 active:scale-98 font-inter text-[14px]", className)}>
        {children}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)] pointer-events-none px-3 py-2 text-xs md:text-sm text-white/80 whitespace-nowrap tracking-tight bg-zinc-900 border border-zinc-700 rounded-md opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-150 before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:top-[96%] before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-zinc-900 before:border-b-0 before:border-zinc-700">
          {infoText}
        </div>
      </button>
  );
};

export default ToolTip;