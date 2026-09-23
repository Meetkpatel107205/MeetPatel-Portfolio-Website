import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge';

export const ProfileFrame = ({
  classname,
  children,
}: PropsWithChildren<{ classname?: string }>) => {
  return (
    <div
      className={twMerge(
        "relative border border-[#2546BD] max-w-7xl mx-auto",
        classname
      )}
    >

      <div className="absolute z-40 -top-3.5 -left-1 pointer-events-none">
        <span className='w-2 h-2 bg-[#2546BD] inline-block'></span>
      </div>

      <div className="absolute z-40 -top-3.5 -right-1 pointer-events-none">
        <span className='w-2 h-2 bg-[#2546BD] inline-block'></span>
      </div>

      <div className="absolute z-40 -bottom-3 -left-1 pointer-events-none">
        <span className='w-2 h-2 bg-[#2546BD] inline-block'></span>
      </div>

      <div className="absolute z-40 -bottom-3 -right-1 pointer-events-none">
        <span className='w-2 h-2 bg-[#2546BD] inline-block'></span>
      </div>

      {children}
    </div>
  );
}
