import type { Metadata } from "next";
import { Noto_Serif, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { CustomScrollbar } from "@/components/CustomScrollbar";
import { SplashReveal } from "@/components/SplashReveal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ArchitecturalGrid } from "@/components/ArchitecturalGrid";
import { LayoutProviders } from "@/components/LayoutProviders";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["italic", "normal"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "OBSIDIAN NOIR | The Silent Authority",
  description: "Elite performance engineering for the global 1%. Join the protocol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerif.variable} ${manrope.variable} ${spaceMono.variable} antialiased`}
      >
        <LayoutProviders>
          <SmoothScroll />
          <CustomScrollbar />
          <ArchitecturalGrid />
          <SplashReveal />
          <CustomCursor />
          {children}
        </LayoutProviders>
      </body>
    </html>
  );
}
