import { DM_Serif_Display, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const DMSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
});

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${DMSerifDisplay.variable} ${jost.variable}`}>
      <body className="bg-white text-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
