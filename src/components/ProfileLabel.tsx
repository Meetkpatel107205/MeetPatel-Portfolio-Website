"use client";

import React from "react";

interface ProfileLabelProps {
  labelImg: React.FC<React.SVGProps<SVGSVGElement>>;
  labelText: string;
}

const ProfileLabel = ({
  labelImg: Icon,
  labelText,
}: ProfileLabelProps) => {
  return (
    <div className="flex items-center gap-4 border border-[#2546BD]/50 bg-[#2546BD]/50 px-6 py-4 rounded-md">
      <Icon className="w-8 h-8 text-[#fdf9f2]" />
      <span className="font-mono text-[#fdf9f2] text-xs uppercase">
        {labelText}
      </span>
    </div>
  );
};

export default ProfileLabel
