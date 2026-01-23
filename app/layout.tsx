import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import FooterWrapper from "@/components/ui/FooterWrapper";

import { getSectionData } from "@/lib/data";

const poppins = Poppins({
  weight: ["600", "500", "700", "400"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CITO Write | Jasa Ilmiah Kedokteran #1 di Indonesia",
  description: "Jasa Ilmiah Kedokteran #1 di Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footerData = getSectionData("footer");

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        <div className="max-w-450 mx-auto">{children}</div>
        <FooterWrapper data={footerData} />
      </body >
    </html>
  );
}
