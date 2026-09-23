"use client";

import { HeroFrame } from "@/components/HeroFrame";
import { HeroLabel } from "@/components/HeroLabel";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { useResponsiveDrag } from "@/hooks/useResponsiveDrag";
import { useFont } from "@/context/FontContext";

const looseDrag = {
  base: { left: -20, right: 30, top: -25, bottom: 30 },
  sm: { left: -30, right: 40, top: -25, bottom: 30 },
  md: { left: -35, right: 100, top: -30, bottom: 50 },
  lg: { left: -80, right: 100, top: -40, bottom: 80 },
};

const mediumDrag = {
  base: { left: -40, right: 15, top: -30, bottom: 15 },
  sm: { left: -50, right: 20, top: -60, bottom: 20 },
  md: { left: -80, right: 50, top: -40, bottom: 25 },
  lg: { left: -200, right: 50, top: -100, bottom: 30 },
};

const tightDrag = {
  base: { left: -100, right: 30, top: -5, bottom: 10 },
  sm: { left: -120, right: 40, top: -15, bottom: 15 },
  md: { left: -180, right: 80, top: -20, bottom: 20 },
  lg: { left: -280, right: 150, top: -30, bottom: 30 },
};

const FONT_SIZE_CLASSES = {
  base: "text-[12px]",
  sm: "text-[12px]",
  md: "text-[14px]",
  lg: "text-[16px]",
  xl: "text-[16px]",
};

export const HeroSection = () => {
  const looseConstraints = useResponsiveDrag(looseDrag);
  const mediumConstraints = useResponsiveDrag(mediumDrag);
  const tightConstraints = useResponsiveDrag(tightDrag);
  const { selectedFont } = useFont();

  return (
    <div id="hero" className="h-screen relative overflow-hidden">
      <HeroFrame classname="absolute top-4 left-4 right-4 bottom-0">
        <div className="flex flex-col h-full">
          <div className="border-b border-[#2546BD]/40">
            <div className="flex p-6 justify-between tracking-wider">
              <div className="hidden md:block font-mono text-[12px] md:text-[13px] text-[#2546BD] font-semibold uppercase">
                <p>DIGITAL INTERFACES</p>
                <p>STRUCTURED CREATIVITY</p>
                <p>DESIGNING REALITY</p>
              </div>

              <div className="font-mono text-[12px] md:text-[13px] text-[#2546BD] font-semibold uppercase md:text-right">
                <p>meetkpatel107205@gmail.com</p>
                <p>Surat, Gujarat, IN</p>
                <p>EST. 2025</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative min-h-[320px]">
            <div className="absolute inset-0 z-10 pointer-events-auto overflow-hidden">
              <HeroLabel
                drag
                dragConstraints={looseConstraints}
                fontWeight="bold"
                animationDelay={0.5}
                rotate={-6}
                className="absolute top-10 left-6 md:top-12 md:left-12 lg:top-20 lg:left-24"
                style={
                  {
                    "--float-start": "0px",
                    "--float-duration": "6s",
                  } as React.CSSProperties
                }
              >
                FRESHER
              </HeroLabel>

              <HeroLabel
                drag
                dragConstraints={looseConstraints}
                fontWeight="bold"
                animationDelay={0.5}
                rotate={6}
                className="absolute top-10 right-8 md:top-12 md:right-12 lg:top-16 lg:right-24 z-30"
                style={
                  {
                    "--float-start": "-6px",
                    "--float-duration": "7.5s",
                  } as React.CSSProperties
                }
              >
                TRUST YOUR GUT
              </HeroLabel>

              <HeroLabel
                drag
                dragConstraints={mediumConstraints}
                fontWeight="bold"
                animationDelay={0.5}
                rotate={8}
                className="absolute bottom-6 right-6 md:bottom-12 md:right-16 z-30"
                style={
                  {
                    "--float-start": "2px",
                    "--float-duration": "5.2s",
                  } as React.CSSProperties
                }
              >
                ENGINEER
              </HeroLabel>

              {/* CENTER LABEL GROUP */}
              <div
                className="
                  absolute
                  bottom-[30%]
                  md:bottom-[25%]
                  lg:bottom-[20%]
                  left-1/2
                  -translate-x-1/2
                  translate-y-1
                  md:translate-y-4
                  lg:translate-y-4
                  z-30
                  flex
                  items-center
                  pointer-events-auto
                "
              >
                <HeroLabel
                  drag
                  dragConstraints={tightConstraints}
                  noHoverDelay={true}
                  fontSize={{
                    base: FONT_SIZE_CLASSES.sm,
                    md: FONT_SIZE_CLASSES.md,
                    lg: FONT_SIZE_CLASSES.xl,
                  }}
                  rotate={0}
                  className="
                    left-[-110px]
                    md:left-[-134px]
                    lg:left-[-160px]
                  "
                  borderWidth={2}
                  fontWeight="extrabold"
                  style={
                    {
                      "--float-start": "-3px",
                      "--float-duration": "6s",
                    } as React.CSSProperties
                  }
                  animationDelay={0}
                >
                  I
                </HeroLabel>

                <HeroLabel
                  drag
                  dragConstraints={tightConstraints}
                  noHoverDelay={true}
                  fontSize={{
                    base: FONT_SIZE_CLASSES.sm,
                    md: FONT_SIZE_CLASSES.md,
                    lg: FONT_SIZE_CLASSES.xl,
                  }}
                  fontWeight="extrabold"
                  rotate={0}
                  className="
                    left-[-63px]
                    md:left-[-75px]
                    lg:left-[-90px]
                  "
                  borderWidth={2}
                  style={
                    {
                      "--float-start": "0px",
                      "--float-duration": "6s",
                    } as React.CSSProperties
                  }
                  animationDelay={0.8}
                >
                  CREATE
                </HeroLabel>

                <HeroLabel
                  drag
                  dragConstraints={tightConstraints}
                  noHoverDelay={true}
                  fontSize={{
                    base: FONT_SIZE_CLASSES.sm,
                    md: FONT_SIZE_CLASSES.md,
                    lg: FONT_SIZE_CLASSES.xl,
                  }}
                  fontWeight="extrabold"
                  rotate={0}
                  className="
                    left-[26px]
                    md:left-[32px]
                    lg:left-[30px]
                  "
                  borderWidth={2}
                  style={
                    {
                      "--float-start": "-2px",
                      "--float-duration": "6s",
                    } as React.CSSProperties
                  }
                  animationDelay={1.6}
                >
                  SYSTEMS
                </HeroLabel>
              </div>
            </div>

            <div className="flex h-full items-center justify-center -translate-y-6 md:-translate-y-10 pointer-events-none">
              <h1
                className={`relative z-10 font-extrabold leading-none text-[#2546BD] text-center
                ${
                  selectedFont === "SANS"
                    ? "font-sans"
                    : selectedFont === "SERIF"
                      ? "font-serif"
                      : "font-mono"
                }`}
              >
                <span className="block text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[12vw]">
                  HI I&apos;M
                </span>
                <span className="block text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[12vw]">
                  MEET
                </span>
              </h1>
            </div>
          </div>

          <div className="border-t border-[#2546BD]/40 mt-auto">
            <div className="grid grid-cols-1 gap-6 p-6 text-center tracking-wider lg:grid-cols-3 lg:items-center lg:text-left">
              <div className="font-mono text-[12px] md:text-[13px] text-[#2546BD] font-semibold uppercase">
                FULL-STACK & AI/ML ENGINEER
              </div>

              <div className="font-mono text-[14px] md:text-[15px] text-[#2546BD] font-bold uppercase md:text-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="animate-bounce">
                    <SparkleIcon className="size-8 md:size-10 animate-pulse" />
                  </div>
                  <span>SCROLL DOWN</span>
                </div>
              </div>

              <div className="font-mono text-[12px] md:text-[13px] text-[#2546BD] font-semibold uppercase lg:text-right">
                <span className="block">
                  SPECIALIZING IN FULL-STACK WEB,
                </span>
                <span className="block">MACHINE LEARNING & AI EXPERIENCES.</span>
              </div>
            </div>
          </div>
        </div>
      </HeroFrame>
    </div>
  );
};
