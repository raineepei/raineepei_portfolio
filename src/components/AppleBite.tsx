"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const FRAMES = [
  "/images/apple/apple.png",
  "/images/apple/applebite1.png",
  "/images/apple/applebite2.png",
  "/images/apple/applebite3.png",
  "/images/apple/applefinal.png",
];

const FRAME_DURATION_MS = 600;

export default function AppleBite() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((current) => (current + 1) % FRAMES.length);
    }, FRAME_DURATION_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[479px] w-[509px]">
      <Image
        src={FRAMES[frame]}
        alt="Pixel-art apple being bitten"
        fill
        className="object-contain [image-rendering:pixelated]"
        sizes="509px"
        priority
      />
    </div>
  );
}
