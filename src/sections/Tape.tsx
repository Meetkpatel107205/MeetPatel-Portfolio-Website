import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = ({
  className = "py-16 sm:py-20 md:py-20 lg:py-16",
}: {
  className?: string;
}) => {
  return (
    <div className={twMerge("overflow-x-clip z-20", className)}>
      <div className="bg-[#2546BD] bg-opacity-10 -rotate-0 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {
            /* LEFT → → → → → → → → → → → → → → → → RIGHT

          0%        10%                   90%        100%
          |---------|---------------------|-----------|
          transparent   BLACK (VISIBLE)       transparent */
            //  fade in     FULL TEXT VISIBILITY     fade out
            // In SVG masks, white = visible
            // In CSS masks, black = visible
          }
          <div className="border-y border-[#2546BD]/20 flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div
                    key={word}
                    className="inline-flex gap-4 items-center leading-tight"
                  >
                    <span className="text-[#2546BD] text-opacity-90 font-mono uppercase font-bold text-sm tracking-widest whitespace-nowrap">
                      {word}
                    </span>
                    <span className="text-[#2546BD] text-opacity-90 font-mono uppercase font-bold text-sm tracking-widest whitespace-nowrap">
                      ///
                    </span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
