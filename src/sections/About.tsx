"use client";

import ExperienceCard from "@/components/ExperienceCard";
import { HeroFrame } from "@/components/HeroFrame";
import { ProfileFrame } from "@/components/ProfileFrame";
import ProfileLabel from "@/components/ProfileLabel";
import { anton } from "@/fonts/anton";
import Image from "next/image";
import ProfileDp from "@/assets/images/profile_dp.png";
import { twMerge } from "tailwind-merge";

// import Postman from "@/assets/icons/Postman.svg";
import { Fragment } from "react";
import ReactIcon from "@/assets/icons/ReactIcon";
import NextJSIcon from "@/assets/icons/NextJSIcon";
import JavaScriptLogo from "@/assets/icons/JavaScript.svg";
import TypescriptIcon from "@/assets/icons/TypescriptIcon";
import VercelIcon from "@/assets/icons/VercelIcon";
import TailwindIcon from "@/assets/icons/TailwindIcon";
import FramerMotionIcon from "@/assets/icons/FramerMotionIcon";
import ThreejsIcon from "@/assets/icons/ThreejsIcon";
import GithubTechIcon from "@/assets/icons/GithubTechIcon";
import MongodbIcon from "@/assets/icons/MongodbIcon";
import NodejsIcon from "@/assets/icons/NodejsIcon";
import ExpressjsIcon from "@/assets/icons/ExpressjsIcon";
import PostgresIcon from "@/assets/icons/PostgresSQL.svg";
import PostmanLogo from "@/assets/icons/Postman.svg";
import PythonIcon from "@/assets/icons/Python.svg"
import ScilnIcon from "@/assets/icons/scikit-learn.svg"
import KaggleIcon from "@/assets/icons/kaggle.svg"
import DockerIcon from "@/assets/icons/docker.svg"
import ToolTip from "@/components/ToolTip";
import React from "react";

const techStack1 = [
  { name: "ReactJS", icon: <ReactIcon /> },
  { name: "NextJS", icon: <NextJSIcon /> },
  { name: "TailwindCSS", icon: <TailwindIcon /> },
  { name: "JavaScript", icon: <JavaScriptLogo /> },
  { name: "Python", icon: <PythonIcon /> },
  { name: "Scikit-learn", icon: <ScilnIcon /> },
  { name: "Kaggle", icon: <KaggleIcon /> },
];

const techStack2 = [
  { name: "Node.js", icon: <NodejsIcon /> },
  { name: "Express.js", icon: <ExpressjsIcon /> },
  { name: "MongoDB", icon: <MongodbIcon /> },
  { name: "PostgresSQL", icon: <PostgresIcon /> },
  { name: "GitHub", icon: <GithubTechIcon /> },
  { name: "Postman", icon: <PostmanLogo /> },
  { name: "Docker", icon: <DockerIcon /> },
];

export const AboutSection = () => {
  return (
    <div id="about" className="relative w-full flex justify-center pt-12 pb-12 md:pt-24 md:pb-10">
      <HeroFrame classname="mx-4 md:mx-4 max-w-7xl w-full py-12 md:px-20 md:py-16">
        <ProfileFrame classname="mx-4 my-8">
          <div className="flex items-center justify-between flex-wrap px-8 py-8 bg-[#2546BD]/5 gap-6 border-b border-[#2546BD]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-[#2546BD] inline-block"></span>
                <span className="font-mono text-xs text-[#2546BD]/50 font-bold tracking-widest uppercase">
                  Fig. 003 - Profile
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden border-2 border-[#2546BD] z-10">
                    <Image
                      src={ProfileDp}
                      fill
                      alt="Cropped profile"
                      className="object-cover"
                    />
                  </div>
                </div>

                <span
                  className={twMerge(
                    "font-mono text-[#2546BD] text-3xl md:text-5xl uppercase",
                    anton.className,
                  )}
                >
                  Meet Patel
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 items-start md-[845px]:items-end">
              <span className="font-mono text-xs bg-[#2546BD] py-1.5 px-4 text-[#fdf9f2] font-semibold tracking-wide uppercase w-fit inline-block">
                Fresher
              </span>
              <span className="font-mono text-xs text-[#2546BD] uppercase">
                Full-Stack AI Engineer
              </span>
            </div>
          </div>

          <div className="px-4 py-6">
            <div className="max-w-[650px]">
              <p className="font-mono text-xs md:text-sm text-[#2546BD] uppercase leading-relaxed max-w-2xl">
                Versatile engineer building modern{" "}
                <span className="font-bold bg-[#2546BD]/15 py-0.5 px-1 rounded-sm">
                  web & AI applications
                </span>
                . with a focus on machine learning algorithms and intuitive user
                experiences.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#2546BD] font-semibold h-10 w-full px-4">
            <div>
              <span className="font-mono text-xs text-[#fdf9f2] uppercase">
                Experience Log
              </span>
            </div>

            <div>
              <span className="font-mono text-xs text-[#fdf9f2] uppercase">
                Seq_01
              </span>
            </div>
          </div>

          <div className="border-b border-[#2546BD]">
            <ExperienceCard />
          </div>

          <div className="w-full flex flex-col md:flex-row border-b border-[#2546BD]">
            <div className="w-full md:w-[50%] border-b md:border-b-0 md:border-r border-[#2546BD]">
              <div className="flex justify-between px-2 py-3 bg-[#2546BD]/5 border-b border-[#2546BD]/15">
                <span className="font-mono text-[#2546BD] text-xs uppercase tracking-wider">
                  System Capabilities
                </span>
                <span className="font-mono text-[#2546BD] text-xs uppercase tracking-wider">
                  SEQ_02
                </span>
              </div>

              <div className="mt-4 mb-8 flex flex-col gap-8">
                <div className="px-8">
                  <span className="font-mono text-[#2546BD]/50 text-xs uppercase tracking-wider font-bold">
                    Core Competencies
                  </span>
                </div>

                {/* <div className="flex flex-col gap-8"> */}
                {/* <div className="overflow-hidden z-20"> */}
                {/* <div className="bg-opacity-10 -mx-1">
                        <div
                        className="relative overflow-hidden
                        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                        >
                        <div className="flex w-max gap-4 animate-move-left [animation-duration:30s]">
                          {[0, 1].map((idx) => (
                          <Fragment key={idx}>
                            {coreCompetencies1.map((label) => (
                            <ProfileLabel
                              key={`${label.name}-${idx}`}
                              labelImg={label.icon}
                              labelText={label.name}
                            />
                            ))}
                          </Fragment>
                          ))}
                        </div>
                        </div>
                      </div> */}
                {/* </div> */}
                {/* </div> */}

                <div className="bg-[#2546BD]">
                  <div className="text-white flex items-center justify-between p-1 md:p-3 border-y border-dashed border-white/30">
                    {techStack1.map((stack) => (
                      <ToolTip key={stack.name} infoText={stack.name}>
                        <div className="size-8 md:size-10 flex justify-center items-center hover:scale-105 transition-transform">
                          {React.cloneElement(stack.icon, {
                            className: "size-6 md:size-8",
                          })}
                        </div>
                      </ToolTip>
                    ))}
                  </div>
                </div>

                {/* <div
                  className="relative z-50 w-full border-y border-[#2546BD] h-6 md:h-8"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                          135deg,
                          #2546BD 0px,
                          #2546BD 0px,
                          transparent 2px,
                          transparent 12px
                        )`,
                  }}
                ></div> */}

                <div className="bg-[#2546BD]">
                  <div className="text-white flex items-center justify-between p-1 md:p-3 border-y border-dashed border-white/30">
                    {techStack2.map((stack) => (
                      <ToolTip key={stack.name} infoText={stack.name}>
                        <div className="size-8 md:size-10 flex justify-center items-center hover:scale-105 transition-transform">
                          {React.cloneElement(stack.icon, {
                            className: "size-6 md:size-8",
                          })}
                        </div>
                      </ToolTip>
                    ))}
                  </div>
                </div>

                {/* <div className="overflow-hidden z-20"> */}
                {/* <div className="bg-opacity-10 -mx-1"> */}
                {/* Mask Wrapper */}
                {/* <div
                          className="relative overflow-hidden
                          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                        >
                          <div className="flex w-max gap-4 animate-move-right [animation-duration:30s]">
                            {[0, 1].map((idx) => (
                              <Fragment key={idx}>
                                {coreCompetencies2.map((label) => (
                                  <ProfileLabel
                                    key={`${label.name}-${idx}`}
                                    labelImg={label.icon}
                                    labelText={label.name}
                                  />
                                ))}
                              </Fragment>
                            ))}
                          </div>
                        </div> */}
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>

            <div className="w-full md:w-[50%] flex flex-col">
              <div className="flex justify-between px-2 py-3 bg-[#2546BD]/5 border-b border-[#2546BD]/15">
                <span className="font-mono text-[#2546BD] text-xs uppercase tracking-wider">
                  Education Data
                </span>
                <span className="font-mono text-[#2546BD] text-xs uppercase tracking-wider">
                  SEQ_03
                </span>
              </div>

              <div className="mt-4 mb-8 px-8 flex flex-col gap-4">
                <div>
                  <span className="font-mono text-[#2546BD]/50 text-xs uppercase tracking-wider font-bold">
                    Academic Record
                  </span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[#2546BD] text-sm font-bold">
                      B.TECH CSE
                    </span>

                    <span className="font-mono text-[#2546BD]/60 text-xs">
                      CHARUSAT&apos; 27
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[#2546BD] text-xs font-bold">
                      CGPA
                    </span>

                    <span className="font-mono text-[#2546BD]/60 text-xs">
                      9.56
                    </span>
                  </div>

                  <div className="border-b border-dotted border-[#2546BD] mt-4"></div>
                </div>
              </div>

              <div className="flex-1 px-10 md:px-16 pb-8 flex items-center">
                <div className="w-full flex items-center gap-4">
                  <div className="h-[2px] flex-1 rounded-full bg-[#2546BD]/25"></div>

                  <div className="relative h-6 w-6 shrink-0">
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rotate-45 border border-[#2546BD] bg-[#2546BD]"></span>
                    <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border border-[#2546BD] bg-[#2546BD]"></span>
                    <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border border-[#2546BD] bg-[#2546BD]"></span>
                    <span className="absolute left-1/2 bottom-0 h-2 w-2 -translate-x-1/2 rotate-45 border border-[#2546BD] bg-[#2546BD]"></span>
                  </div>

                  <div className="h-[2px] flex-1 rounded-full bg-[#2546BD]/25"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#2546BD]/5 px-2 py-2">
            <span className="font-mono text-xs text-[#2546BD] uppercase">
              End of File
            </span>
            <span className="font-mono text-xs text-[#2546BD] uppercase">
              PX. 810
            </span>
          </div>
        </ProfileFrame>
      </HeroFrame>
    </div>
  );
};
