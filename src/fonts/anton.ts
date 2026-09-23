import { Anton } from "next/font/google";

export const anton = Anton({
  subsets: ["latin"],
  weight: "400", // Anton only has 400
  display: "swap",
  variable: "--font-anton",
});
