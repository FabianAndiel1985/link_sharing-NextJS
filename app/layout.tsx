import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header/Header";
import LinkCustomization from "@/components/links/LinkCustomization";
import { Instrument_Sans } from "next/font/google";
import HandyImage from "@/components/links/HandyImage";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
