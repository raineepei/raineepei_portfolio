"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PixelHandsIcon from "./PixelHandsIcon";

const projects = [
  { number: "01", label: "S&C ELECTRIC", href: "/sc-electric" },
  { number: "02", label: "HEALTHCARE ROBOTICS LAB", href: "/healthcare-robotics-lab" },
  { number: "03", label: "KINI KOFFEE", href: "/kini-koffee" },
  { number: "04", label: "PLAYGROUND", href: "/playground" },
];

export default function LeftNav({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div
      className={`sticky top-0 flex h-screen w-[513px] shrink-0 items-start bg-transparent px-[60px] py-11.5 ${className}`}
    >
      <div className="flex w-[437px] flex-col items-start gap-[70px]">
        <div className="flex w-full flex-col items-start gap-[30px]">
          <Link href="/" className="w-full font-ufo-mono text-sm text-accent">
            Rainee Pei
          </Link>
          <div className="flex w-full flex-col items-start gap-[10px]">
            <div className="inline-flex items-center bg-accent">
              <p className="whitespace-nowrap font-inconsolata text-sm text-white">
                UX ANALYST @ S&amp;C ELECTRIC
              </p>
            </div>
            <div className="flex items-center gap-[30px] whitespace-nowrap font-inconsolata text-sm text-accent">
              <a href="/resume" className="underline underline-offset-2">
                RESUME.
              </a>
              <a
                href="https://www.linkedin.com/in/raineepei/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                LINKEDIN.
              </a>
              <a
                href="mailto:pei.rainee@gmail.com"
                className="underline underline-offset-2"
              >
                EMAIL.
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[18px]">
          {projects.map((project) => {
            const isActive = pathname === project.href;
            return (
              <Link
                key={project.number}
                href={project.href}
                className="group flex w-full items-end gap-1.5"
              >
                <div className="flex items-end gap-[11px] whitespace-nowrap font-inconsolata text-accent">
                  <p className="text-sm">[{project.number}]</p>
                  <p
                    className={`text-[13px] underline-offset-2 group-hover:underline ${
                      isActive ? "underline" : ""
                    }`}
                  >
                    {project.label}
                  </p>
                </div>
                <div
                  className={`transition-opacity duration-300 group-hover:opacity-100 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <PixelHandsIcon />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
