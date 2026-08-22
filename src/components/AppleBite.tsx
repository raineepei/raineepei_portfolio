"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const FRAMES = [
  { src: "/images/apple/apple.png", hold: 1800 },
  { src: "/images/apple/applebite1.png", hold: 500 },
  { src: "/images/apple/applebite2.png", hold: 500 },
  { src: "/images/apple/applebite3.png", hold: 500 },
  { src: "/images/apple/applefinal.png", hold: 1800 },
];

export default function AppleBite() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFrame((current) => (current + 1) % FRAMES.length);
    }, FRAMES[frame].hold);
    return () => clearTimeout(timer);
  }, [frame]);

  return (
    <div className="relative h-[479px] w-[509px]">
      <Image
        src={FRAMES[frame].src}
        alt="Pixel-art apple being bitten"
        fill
        className="object-contain [image-rendering:pixelated]"
        sizes="509px"
        priority
      />
    </div>
  );
}
