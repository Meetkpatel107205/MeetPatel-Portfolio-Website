"use client";

import {
  ArrowUpRight,
  Mail,
  Phone,
  SquareArrowOutUpRight,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TapeSection } from "./Tape";

export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mt-16">
      <TapeSection className="" />

      <div className="h-fit py-8 md:px-32 lg:px-60 w-full bg-[#2546BD]">
        <div className="flex flex-col gap-12 md:gap-0 md:flex-row md:items-center md:justify-between p-6">
          <div className="flex flex-col gap-12">
            <div
              onClick={() => {
                setIsOpen(true);
              }}
              className="flex flex-col gap-12 max-w-[550px]"
            >
              <div className="group flex flex-col gap-4">
                <span className="font-mono font-bold text-xs text-[#fdf9f2]/40 uppercase cursor-pointer group-hover:opacity-80">
                  Start a Project
                </span>
                <span className="font-mono font-bold text-[2.8rem] leading-none tracking-tighter md:text-4xl lg:text-7xl text-[#fdf9f2] uppercase cursor-pointer group-hover:opacity-80">
                  Let's Create Something Iconic.
                </span>
              </div>
            </div>
            <div className="w-fit border-b border-[#fdf9f2]">
              <span className="font-mono font-semibold text-lg lg:text-xl text-[#fdf9f2] hover:opacity-80 cursor-pointer">
                meetkpatel10725@gmail.com
              </span>
            </div>
          </div>

          <div className="flex md:flex-row-reverse">
            <div className="w-fit flex flex-col gap-4">
              <div>
                <span className="font-mono text-[#fdf9f2]/40 uppercase">
                  Socials
                </span>
              </div>

              <div className="flex flex-col">
                <a href="https://www.linkedin.com/in/meetkpatel107205" target="_blank" rel="noopener noreferrer" className="font-mono text-[#fdf9f2] uppercase hover:underline underline-offset-4 cursor-pointer">
                  LinkedIn
                </a>
                <a href="https://github.com/Meetkpatel107205" target="_blank" rel="noopener noreferrer" className="font-mono text-[#fdf9f2] uppercase hover:underline underline-offset-4 cursor-pointer">
                  Github
                </a>
                <a href="https://leetcode.com/u/meetkpatel107205/" target="_blank" rel="noopener noreferrer" className="font-mono text-[#fdf9f2] uppercase hover:underline underline-offset-4 cursor-pointer">
                  Leetcode
                </a>
                <a href="https://codeforces.com/profile/meetkpatel" target="_blank" rel="noopener noreferrer" className="font-mono text-[#fdf9f2] uppercase hover:underline underline-offset-4 cursor-pointer">
                  Codeforces
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999] flex-col p-4"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <motion.div
              className="bg-[#fdf9f2] w-[calc(100%-2rem)] max-w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl p-5 md:p-8 shadow-xl flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-anton text-[#2546BD] text-md md:text-xl font-semibold tracking-wider uppercase">
                  Connect Here
                </span>

                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="text-[#2546BD]/60 font-bold"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col">
                <div className="group min-h-[5rem] md:h-20 w-full border-[1.5px] border-[#2546BD]/40 border-b-0 flex items-center px-4 py-3 md:py-0 gap-3 md:gap-4 hover:bg-[#2546BD] transition-colors duration-300 ease-out">
                  <div className="h-10 w-10 md:h-12 md:w-12 shrink-0 border-[1.5px] border-[#2546BD]/20 bg-[#2546BD]/10 flex items-center justify-center group-hover:bg-[#fdf9f2] transition-colors duration-300 ease-out">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-[#2546BD]/60 flex-shrink-0 transition-colors duration-300 ease-out" />
                  </div>

                  <div className="min-w-0 flex-1 flex items-center justify-between gap-2">
                    <div className="min-w-0 flex flex-col">
                      <span className="font-mono text-[#2546BD]  text-[0.6rem] md:text-[0.7rem] uppercase group-hover:text-[#fdf9f2] transition-colors duration-300 ease-out">
                        Direct Mail
                      </span>
                      <span className="font-mono text-[#2546BD] font-semibold text-[0.65rem] sm:text-xs md:text-xl leading-tight whitespace-nowrap break-all group-hover:text-[#fdf9f2] transition-colors duration-300 ease-out">
                        meetkpatel107205@gmail.com
                      </span>
                    </div>
                    <div className="shrink-0 pl-1">
                      <ArrowUpRight className="h-4 w-4 md:h-6 md:w-6 text-[#2546BD] group-hover:text-[#fdf9f2] opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
                    </div>
                  </div>
                </div>

                <div className="group min-h-[5rem] md:h-20 w-full border-[1.5px] border-[#2546BD]/40 flex items-center px-4 py-3 md:py-0 gap-3 md:gap-4 hover:bg-[#2546BD] transition-colors duration-300 ease-out">
                  <div className="h-10 w-10 md:h-12 md:w-12 shrink-0 border-[1.5px] border-[#2546BD]/20 bg-[#2546BD]/10 flex items-center justify-center group-hover:bg-[#fdf9f2] transition-colors duration-300 ease-out">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-[#2546BD]/60 shrink-0 transition-colors duration-300 ease-out" />
                  </div>

                  <div className="min-w-0 flex flex-col">
                    <span className="font-mono text-[#2546BD] text-[0.6rem] md:text-[0.7rem] uppercase group-hover:text-[#fdf9f2] transition-colors duration-300 ease-out">
                      Phone No.
                    </span>
                    <span className="font-mono text-[#2546BD] font-semibold text-xs md:text-xl group-hover:text-[#fdf9f2] transition-colors duration-300 ease-out">
                      +91 8320635225
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-anton text-md md:text-xl tracking-wider font-semibold text-[#2546BD] uppercase">
                  Network
                </span>

                <div className="flex flex-row flex-wrap gap-2">
                  <a href="https://www.linkedin.com/in/meetkpatel107205" target="_blank" rel="noopener noreferrer" className="h-10 w-[calc(50%-0.25rem)] border-[1.1px] border-[#2546BD]/40 bg-[#2546BD]/10 font-mono text-[0.6rem] md:text-xs text-[#2546BD] flex items-center justify-center gap-2 py-4 md:py-6 uppercase hover:bg-[#2546BD] hover:text-[#fdf9f2] transition-colors duration-300 ease-out">
                    <span>LinkedIn</span>
                    <SquareArrowOutUpRight className="h-2.5 w-2.5" />
                  </a>
                  <a href="https://github.com/Meetkpatel107205" target="_blank" rel="noopener noreferrer" className="h-10 w-[calc(50%-0.25rem)] border-[1.1px] border-[#2546BD]/40 bg-[#2546BD]/10 font-mono text-[0.6rem] md:text-xs text-[#2546BD] flex items-center justify-center gap-2 py-4 md:py-6 uppercase hover:bg-[#2546BD] hover:text-[#fdf9f2] transition-colors duration-300 ease-out">
                    <span>GitHub</span>
                    <SquareArrowOutUpRight className="h-2.5 w-2.5" />
                  </a>
                  <a href="https://leetcode.com/u/meetkpatel107205/" target="_blank" rel="noopener noreferrer" className="h-10 w-[calc(50%-0.25rem)] border-[1.1px] border-[#2546BD]/40 bg-[#2546BD]/10 font-mono text-[0.6rem] md:text-xs text-[#2546BD] flex items-center justify-center gap-2 py-4 md:py-6 uppercase hover:bg-[#2546BD] hover:text-[#fdf9f2] transition-colors duration-300 ease-out">
                    <span>LeetCode</span>
                    <SquareArrowOutUpRight className="h-2.5 w-2.5" />
                  </a>
                  <a href="https://codeforces.com/profile/meetkpatel" target="_blank" rel="noopener noreferrer" className="h-10 w-[calc(50%-0.25rem)] border-[1.1px] border-[#2546BD]/40 bg-[#2546BD]/10 font-mono text-[0.6rem] md:text-xs text-[#2546BD] flex items-center justify-center gap-2 py-4 md:py-6 uppercase hover:bg-[#2546BD] hover:text-[#fdf9f2] transition-colors duration-300 ease-out">
                    <span>Codeforces</span>
                    <SquareArrowOutUpRight className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
