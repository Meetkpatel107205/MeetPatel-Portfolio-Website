import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge';

const ProjectFrame = ({
  classname,
  children,
  index = 1,
}: PropsWithChildren<{ classname?: string; index?: number }>) => {
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

      <div className="absolute z-40 -top-0.4 -left-0 pointer-events-none">
        <span className='w-10 h-8 bg-[#2546BD] font-mono font-bold text-xs sm:text-sm text-[#fdf9f2] flex items-center justify-center'>{String(index).padStart(2, '0')}</span>
      </div>
      {children}
    </div>
  );
}

export default ProjectFrame