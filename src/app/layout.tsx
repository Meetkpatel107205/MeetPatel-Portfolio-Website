import type { Metadata } from "next";
import { anton } from "@/fonts/anton";
import { spaceMono } from "@/fonts/spaceMono";
import { FontProvider } from "@/context/FontContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meet Patel | Full-Stack & AI Engineer",
  description: "Portfolio of Meet Patel, specializing in Full-Stack Web Development and Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${anton.variable} bg-[#fdf9f2]`}>
        <FontProvider>{children}</FontProvider>
      </body>
    </html>
  );
}
