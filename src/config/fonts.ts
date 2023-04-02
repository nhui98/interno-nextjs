import { DM_Serif_Display, Jost } from "next/font/google";

export const DMSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
});

export const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
