"use client";

import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { useEffect, useRef, useState } from "react";
import { useFont } from "@/context/FontContext";

export const Header = () => {
  const CHILD_DIMINISH_MS = 170;
  const MENU_CURTAIN_CLOSE_MS = 360;
  const MENU_CLOSE_TOTAL_MS = CHILD_DIMINISH_MS + MENU_CURTAIN_CLOSE_MS;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDiminishingMenu, setIsDiminishingMenu] = useState(false);
  const [isClosingMenu, setIsClosingMenu] = useState(false);
  const [isFontOpen, setIsFontOpen] = useState(false);
  const { setSelectedFont } = useFont();
  const desktopAppearanceRef = useRef<HTMLDivElement | null>(null);
  const mobileAppearanceRef = useRef<HTMLDivElement | null>(null);
  const curtainStartTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (curtainStartTimerRef.current) {
        clearTimeout(curtainStartTimerRef.current);
      }
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      const clickedDesktopAppearance =
        desktopAppearanceRef.current?.contains(target);
      const clickedMobileAppearance =
        mobileAppearanceRef.current?.contains(target);

      if (clickedDesktopAppearance || clickedMobileAppearance) {
        return;
      }

      setIsOpen(false);
      setIsFontOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const openMobileMenu = () => {
    if (curtainStartTimerRef.current) {
      clearTimeout(curtainStartTimerRef.current);
      curtainStartTimerRef.current = null;
    }

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsDiminishingMenu(false);
    setIsClosingMenu(false);
    setIsOpenMenu(true);
  };

  const closeMobileMenu = () => {
    if (isDiminishingMenu || isClosingMenu) {
      return;
    }

    setIsDiminishingMenu(true);
    setIsOpen(false);
    setIsFontOpen(false);

    curtainStartTimerRef.current = setTimeout(() => {
      setIsClosingMenu(true);
      curtainStartTimerRef.current = null;
    }, CHILD_DIMINISH_MS);

    closeTimerRef.current = setTimeout(() => {
      setIsOpenMenu(false);
      setIsDiminishingMenu(false);
      setIsClosingMenu(false);
      closeTimerRef.current = null;
    }, MENU_CLOSE_TOTAL_MS);
  };

  const toggleMobileMenu = () => {
    if (isOpenMenu && !isClosingMenu && !isDiminishingMenu) {
      closeMobileMenu();
      return;
    }

    if (!isOpenMenu && !isDiminishingMenu) {
      openMobileMenu();
    }
  };

  return (
    <div className="flex flex-col mb-2 sticky top-0 z-[999]">
      <div className="h-16 border-b border-[#2546BD]/40 px-4 md:px-8 lg:px-44 flex items-center justify-between sticky top-0 backdrop-blur-xl bg-[#fdf9f2]/70 z-50">
        <div className="h-full flex items-center justify-center">
          <a href="#main" className="flex items-center">
            <span className="mr-3">
              <SparkleIcon className="size-5 md:size-5 text-[#2546BD] animate-spin" />
            </span>
            <span className="font-mono text-[#2546BD] text-md font-semibold">
              MEET
            </span>
            <span className="hidden lg:inline font-mono text-[#2546BD] text-md font-semibold">
              &nbsp;//&nbsp;
            </span>
            <span className="hidden lg:inline font-mono text-[#2546BD] text-md font-semibold">
              PORTFOLIO
            </span>
          </a>
        </div>
        <button
          className="lg:hidden flex items-center justify-center hover:bg-gray-200 p-1 rounded-sm"
          aria-label={isOpenMenu ? "Close menu" : "Open menu"}
          onClick={toggleMobileMenu}
        >
          {isOpenMenu ? (
            <X size={22} className="text-[#2546BD]" />
          ) : (
            <Menu size={22} className="text-[#2546BD]" />
          )}
        </button>
        <div className="hidden lg:flex h-full w-fit items-center justify-center mt-1">
          <div className="h-full w-fit flex items-center justify-center px-2 gap-10">
            <a
              href="#work"
              className="relative font-mono uppercase text-[#2546BD] text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2546BD] hover:after:w-full after:transition-all after:duration-300"
            >
              work
            </a>
            <a
              href=""
              className="relative font-mono uppercase text-[#2546BD] text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2546BD] hover:after:w-full after:transition-all after:duration-300"
            >
              blog
            </a>
            <a
              href="#about"
              className="relative font-mono uppercase text-[#2546BD] text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2546BD] hover:after:w-full after:transition-all after:duration-300"
            >
              about
            </a>
          </div>
          <span className="font-mono text-[#2546BD]/60 font-semibold ml-2 mr-2 pb-1">
            |
          </span>
          <div
            ref={desktopAppearanceRef}
            className="h-full w-fit flex items-center gap-6 relative"
          >
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="flex items-center gap-2 hover:opacity-80"
            >
              <span className="font-mono uppercase text-[#2546BD] text-sm font-semibold pb-1">
                theme
              </span>
              {isOpen ? (
                <ChevronUp size={16} className="text-[#2546BD] mb-1" />
              ) : (
                <ChevronDown size={16} className="text-[#2546BD] mb-1" />
              )}
            </button>
            {isOpen && (
              <div
                style={
                  {
                    "--float-duration": "4s",
                    "--float-start": "0px",
                    "--rotate": "0deg",
                    animationDelay: `0.2s`,
                  } as React.CSSProperties
                }
                className="absolute top-14 right-[50%] flex flex-col bg-[#fdf9f2] border border-[#2546BD] shadow-[4px_4px_0px_#2546BD] z-50 animate-floatPopUp"
              >
                {["ROYAL", "LIGHT", "DARK"].map((theme, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 px-6 py-3 cursor-pointer border-b border-[#2546BD]/40 last:border-b-0 hover:bg-[#2546BD]"
                  >
                    <span
                      className={`h-4 w-4 border transition-colors
                    ${
                      theme === "ROYAL"
                        ? "bg-[#2546BD] border-[#2546BD] group-hover:border-[#fdf9f2]"
                        : theme === "LIGHT"
                          ? "bg-[#fdf9f2] border-[#2546BD]"
                          : "bg-[#1a1a1a] border-[#2546BD]"
                    }`}
                    ></span>
                    <span className="text-[#2546BD] font-mono font-bold text-xs tracking-wide transition-colors group-hover:text-[#fdf9f2]">
                      {theme}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={() => {
                setIsFontOpen(!isFontOpen);
              }}
              className="flex items-center gap-2 hover:opacity-80"
            >
              <span className="font-mono uppercase text-[#2546BD] text-sm font-semibold pb-1">
                font
              </span>
              {isFontOpen ? (
                <ChevronUp size={16} className="text-[#2546BD] mb-1" />
              ) : (
                <ChevronDown size={16} className="text-[#2546BD] mb-1" />
              )}
            </button>
            {isFontOpen && (
              <div
                style={
                  {
                    "--float-duration": "4s",
                    "--float-start": "0px",
                    "--rotate": "0deg",
                    animationDelay: `0.2s`,
                  } as React.CSSProperties
                }
                className="absolute top-14 right-0 flex flex-col bg-[#fdf9f2] border border-[#2546BD] shadow-[4px_4px_0px_#2546BD] z-50 animate-floatPopUp"
              >
                {["SANS", "SERIF", "MONO"].map((font, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedFont(font as "SANS" | "SERIF" | "MONO");
                      setIsFontOpen(false);
                    }}
                    className="group flex items-center gap-3 px-6 py-3 cursor-pointer border-b border-[#2546BD]/40 last:border-b-0 hover:bg-[#2546BD]"
                  >
                    <span
                      className={`text-sm font-bold transition-colors group-hover:text-[#fdf9f2]
                      ${
                        font === "SANS"
                          ? "font-sans"
                          : font === "SERIF"
                            ? "font-serif"
                            : "font-mono"
                      } text-[#2546BD]`}
                    >
                      Aa
                    </span>
                    <span className="text-[#2546BD] font-mono font-bold text-xs tracking-wide transition-colors group-hover:text-[#fdf9f2]">
                      {font}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isOpenMenu && (
        <div
          className={`lg:hidden fixed top-16 left-0 right-0 h-fit w-full bg-[#fdf9f2]/95 border-b border-[#2546BD]/40 p-6 z-[60] backdrop-blur-xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] ${
            isClosingMenu
              ? "animate-menu-curtain-close"
              : isDiminishingMenu
                ? ""
                : "animate-menu-curtain-open"
          }`}
        >
          <div
            className={`transition-all duration-150 ease-out ${
              isDiminishingMenu
                ? "opacity-0 scale-[0.97] translate-y-1"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            <div className="flex flex-col text-2xl gap-4 border-b border-[#2546BD]/40">
              <a
                href="#work"
                className="font-anton text-[#2546BD] tracking-tighter hover:ml-2"
                onClick={closeMobileMenu}
              >
                WORK
              </a>
              <a
                href="#about"
                className="font-anton text-[#2546BD] tracking-tighter hover:ml-2"
                onClick={closeMobileMenu}
              >
                ABOUT
              </a>
              <a
                href="#contact"
                className="font-anton text-[#2546BD] tracking-tighter hover:ml-2 mb-6"
                onClick={closeMobileMenu}
              >
                CONTACT
              </a>
            </div>

            <div className="mt-6 flex justify-between">
              <span className="font-mono text-[#2546BD] text-xs">
                Appearance
              </span>

              <div
                ref={mobileAppearanceRef}
                className="h-full w-fit flex items-center gap-6 relative"
              >
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <span className="h-4 w-4 bg-[#2546BD]"></span>
                  {isOpen ? (
                    <ChevronUp size={16} className="text-[#2546BD] mb-1" />
                  ) : (
                    <ChevronDown size={16} className="text-[#2546BD] mb-1" />
                  )}
                </button>
                {isOpen && (
                  <div
                    style={
                      {
                        "--float-duration": "4s",
                        "--float-start": "0px",
                        "--rotate": "0deg",
                        animationDelay: `0.2s`,
                      } as React.CSSProperties
                    }
                    className="absolute top-8 right-[50%] flex flex-col bg-[#fdf9f2] border border-[#2546BD] shadow-[4px_4px_0px_#2546BD] z-50 animate-floatPopUp"
                  >
                    {["ROYAL", "LIGHT", "DARK"].map((theme, index) => (
                      <div
                        key={index}
                        className="group flex items-center gap-3 px-6 py-3 cursor-pointer border-b border-[#2546BD]/40 last:border-b-0 hover:bg-[#2546BD]"
                      >
                        <span
                          className={`h-4 w-4 border transition-colors
                    ${
                      theme === "ROYAL"
                        ? "bg-[#2546BD] border-[#2546BD] group-hover:border-[#fdf9f2]"
                        : theme === "LIGHT"
                          ? "bg-[#fdf9f2] border-[#2546BD]"
                          : "bg-[#1a1a1a] border-[#2546BD]"
                    }`}
                        ></span>
                        <span className="text-[#2546BD] font-mono font-bold text-xs tracking-wide transition-colors group-hover:text-[#fdf9f2]">
                          {theme}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => {
                    setIsFontOpen(!isFontOpen);
                  }}
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <span className="font-mono uppercase text-[#2546BD] text-sm font-semibold pb-1">
                    AA
                  </span>
                  {isFontOpen ? (
                    <ChevronUp size={16} className="text-[#2546BD] mb-1" />
                  ) : (
                    <ChevronDown size={16} className="text-[#2546BD] mb-1" />
                  )}
                </button>
                {isFontOpen && (
                  <div
                    style={
                      {
                        "--float-duration": "4s",
                        "--float-start": "0px",
                        "--rotate": "0deg",
                        animationDelay: `0.2s`,
                      } as React.CSSProperties
                    }
                    className="absolute top-8 right-0 flex flex-col bg-[#fdf9f2] border border-[#2546BD] shadow-[4px_4px_0px_#2546BD] z-50 animate-floatPopUp"
                  >
                    {["SANS", "SERIF", "MONO"].map((font, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedFont(font as "SANS" | "SERIF" | "MONO");
                          setIsFontOpen(false);
                        }}
                        className="group flex items-center gap-3 px-6 py-3 cursor-pointer border-b border-[#2546BD]/40 last:border-b-0 hover:bg-[#2546BD]"
                      >
                        <span
                          className={`text-sm font-bold transition-colors group-hover:text-[#fdf9f2]
                      ${
                        font === "SANS"
                          ? "font-sans"
                          : font === "SERIF"
                            ? "font-serif"
                            : "font-mono"
                      } text-[#2546BD]`}
                        >
                          Aa
                        </span>
                        <span className="text-[#2546BD] font-mono font-bold text-xs tracking-wide transition-colors group-hover:text-[#fdf9f2]">
                          {font}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
