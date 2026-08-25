import type { Metadata } from "next";
import { Chivo, Cormorant, Roboto_Mono } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Rainee Pei — Portfolio",
  description: "Portfolio of Rainee Pei, UX Researcher and Designer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${chivo.variable} ${cormorant.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f2f2f2]">{children}</body>
    </html>
  );
}
