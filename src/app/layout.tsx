import type { Metadata } from "next";
import { Chivo, Cormorant, Inconsolata, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
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

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ufoMono = localFont({
  src: "../fonts/ufo-mono/UFO-Mono.woff2",
  variable: "--font-ufo-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rainee Pei — Portfolio",
  description: "Portfolio of Rainee Pei, UX Researcher and Designer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${chivo.variable} ${cormorant.variable} ${robotoMono.variable} ${inconsolata.variable} ${ufoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f2f2f2]">{children}</body>
    </html>
  );
}
