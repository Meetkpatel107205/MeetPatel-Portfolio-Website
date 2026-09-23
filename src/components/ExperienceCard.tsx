import React from 'react'
import { anton } from '@/fonts/anton';
import { twMerge } from 'tailwind-merge';

const ExperienceCard = () => {
  return (
    <div className='flex flex-col md:flex-row items-start gap-4 md:gap-8 p-6 hover:bg-[#2546BD]/10 group border-t border-[#2546BD]/30'>
        <div className='flex flex-col md:w-[40%]'>
            <h3 className={twMerge("text-3xl w-full text-[#2546BD] uppercase tracking-tighter group-hover:pl-3 transition-all", anton.className)}>BrainyBeam Infotech Pvt. Ltd.</h3>
            <span className='font-mono text-[#2546BD]/50 text-xs uppercase mt-1'>Web Developer</span>
            <span className='font-mono text-[#2546BD] bg-[#2546BD]/10 px-2 py-1 w-fit whitespace-nowrap inline-block text-xs uppercase mt-2 rounded-sm'>May&apos; 25 - Jun&apos; 25</span>
        </div>

        <div className='mt-2 opacity-80'>
            <ul className='flex flex-col gap-2'>
                <li className='flex items-center gap-2'>
                    <span className='h-1 w-1 flex-shrink-0 bg-[#2546BD] inline-block'></span>
                    <span className='font-mono text-[#2546BD] text-xs'>Deployed server-side updates and managed SQL database operations.</span>
                </li>
                <li className='flex items-center gap-2'>
                    <span className='h-1 w-1 flex-shrink-0 bg-[#2546BD] inline-block'></span>
                    <span className='font-mono text-[#2546BD] text-xs'>Handled batch processing for reconciliation and recharge systems.</span>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default ExperienceCard