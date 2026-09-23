"use client";

import React, { createContext, useContext, useState } from "react";

type FontType = "SANS" | "SERIF" | "MONO";

interface FontContextType {
  selectedFont: FontType;
  setSelectedFont: (font: FontType) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedFont, setSelectedFont] = useState<FontType>("SANS");

  return (
    <FontContext.Provider value={{ selectedFont, setSelectedFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within FontProvider");
  }
  return context;
};
