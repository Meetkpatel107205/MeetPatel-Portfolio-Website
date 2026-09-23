import React from "react";
import ProjectFrame from "./ProjectFrame";
import Image from "next/image";
import { anton } from "@/fonts/anton";
import { twMerge } from "tailwind-merge";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

interface ProjectCardProps {
  index: number;
  category: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  link: string;
  image: string;
}

const ProjectCard = ({
  index,
  category,
  year,
  title,
  subtitle,
  description,
  highlight,
  link,
  image,
}: ProjectCardProps) => {
  return (
    <ProjectFrame classname="h-[754px] md:h-[500px] mx-4 group" index={index}>
      <div className="flex h-full flex-col md:flex-row">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full md:w-1/2 min-h-[350px] border-b md:border-b-0 md:border-r border-[#2546BD] cursor-pointer"
        >
          <div className="relative h-full w-full p-10 transition-colors duration-500 bg-[#fdf9f2] group-hover:bg-[#2546BD]/10 flex items-center justify-center">
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={`${title} preview`}
                fill
                className="object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div
              className="
                absolute inset-0
                bg-[#2546BD]/30
                z-10
                mix-blend-multiply
                transition-opacity duration-500
                group-hover:opacity-0
                pointer-events-none
              "
            />
          </div>
        </a>

        <div className="flex flex-col h-full w-full md:w-1/2 group bg-[#fdf9f2] group-hover:bg-[#2546BD]/5">
          <div className="flex items-center justify-between p-6 border-b border-[#2546BD]/20">
            <div className="flex flex-col">
              <span className="font-mono font-bold text-[#2546BD]/60 uppercase text-[12px] tracking-wider">
                Category
              </span>
              <span className="font-mono font-bold text-[#2546BD] uppercase text-[12px] tracking-wider">
                {category}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono font-bold text-[#2546BD]/60 uppercase text-[12px] tracking-wider">
                Year
              </span>
              <span className="font-mono font-bold text-[#2546BD] uppercase text-[12px] tracking-wider">
                {year}
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col p-6 items-center md:items-start gap-6 my-auto">
            <div className="self-start flex flex-col gap-4">
              <span
                className={twMerge(
                  "text-5xl md:text-7xl text-[#2546BD] uppercase tracking-tighter group-hover:translate-x-2 transition-all duration-200 ease-in",
                  anton.className,
                )}
              >
                {title}
              </span>
              <span className="font-mono font-bold text-xs text-[#2546BD]/50 uppercase">
                - {subtitle}
              </span>
            </div>

            <div className="w-full">
              <span
                className="
                  font-mono text-sm
                  text-[#2546BD]
                  uppercase
                  max-w-[280px]
                  md:max-w-none
                  md:w-full
                  leading-relaxed
                  line-clamp-3
                  md:line-clamp-none
                  "
              >
                {description}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 gap-4 flex-wrap border-t bg-[#2546BD]/5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-[#2546BD] inline-block"></span>
              <span className="font-mono text-[10px] text-[#2546BD]/60 uppercase truncate max-w-[235px] md:max-w-[245px] lg:max-w-[400px]">
                {highlight}
              </span>
            </div>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-shrink-0 gap-2 items-center ml-auto cursor-pointer group/access"
            >
              <span className="font-mono text-[#2546BD] font-bold text-xs uppercase opacity-0 group-hover/access:opacity-80 transition-all duration-150 ease-in">
                Access Link
              </span>
              <span className="h-8 w-8 flex items-center justify-center flex-shrink-0 bg-[#2546BD] inline-block text-[#fdf9f2]">
                <ArrowUpRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </ProjectFrame>
  );
};

export default ProjectCard;
