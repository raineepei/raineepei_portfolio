"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SPARKLE_CHARS = [...".⋆ 𖥔 ݁ ˖₊‧.⭒.‧₊˖ ݁𖥔 ݁˖ ."].filter((char) => char.trim().length > 0);
const TRAIL_MIN_DISTANCE = 15;
const TRAIL_LIFETIME_MS = 900;

const PHOTO_PANELS = [
  { src: "/images/home/strip-1.png", naturalWidth: 140, position: "object-bottom" },
  { src: "/images/home/strip-2.png", naturalWidth: 206.621, position: "object-bottom" },
  { src: "/images/home/strip-3.png", naturalWidth: 139.363, position: "object-bottom" },
  { src: "/images/home/strip-4.png", naturalWidth: 147, position: "object-bottom" },
  { src: "/images/home/strip-5.png", naturalWidth: 155, position: "object-bottom" },
  { src: "/images/home/strip-6.png", naturalWidth: 225, position: "object-center" },
];
const PHOTO_NATURAL_WIDTH = PHOTO_PANELS.reduce((sum, p) => sum + p.naturalWidth, 0);
const PHOTO_NATURAL_HEIGHT = 155;
const PHOTO_MAX_HEIGHT = 64;
const PHOTO_MAX_WIDTH = (PHOTO_NATURAL_WIDTH * PHOTO_MAX_HEIGHT) / PHOTO_NATURAL_HEIGHT;
const PHOTO_MIN_WIDTH = 140;

type TrailItem = {
  id: number;
  left: number;
  top: number;
  char: string;
};

let uid = 0;

export default function HomeGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const [photo, setPhoto] = useState<{ top: number; left: number; width: number; height: number } | null>(
    null
  );
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const margin = 24;
    const width = Math.max(
      Math.min(PHOTO_MAX_WIDTH, el.clientWidth - margin * 2),
      PHOTO_MIN_WIDTH
    );
    const height = width * (PHOTO_NATURAL_HEIGHT / PHOTO_NATURAL_WIDTH);
    const maxLeft = Math.max(el.clientWidth - width - margin, margin);
    const maxTop = Math.max(el.clientHeight - height - margin, margin);
    setPhoto({
      width,
      height,
      top: margin + Math.random() * (maxTop - margin),
      left: margin + Math.random() * (maxLeft - margin),
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const last = lastPosRef.current;
    const dist = last ? Math.hypot(x - last.x, y - last.y) : Infinity;
    if (dist < TRAIL_MIN_DISTANCE) return;
    lastPosRef.current = { x, y };

    const id = uid++;
    const char = SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)];
    setTrail((current) => [...current, { id, left: x, top: y, char }]);
    setTimeout(() => {
      setTrail((current) => current.filter((item) => item.id !== id));
    }, TRAIL_LIFETIME_MS);
  };

  const handleMouseLeave = () => {
    lastPosRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className="relative flex-1 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {trail.map((item) => (
        <span
          key={item.id}
          className="sparkle-trail text-accent pointer-events-none absolute text-2xl whitespace-nowrap"
          style={{ left: item.left, top: item.top }}
        >
          {item.char}
        </span>
      ))}

      {photo && (
        <div
          className="absolute flex"
          style={{ top: photo.top, left: photo.left, width: photo.width, height: photo.height }}
        >
          {PHOTO_PANELS.map((panel) => (
            <div
              key={panel.src}
              className="relative h-full"
              style={{ width: (panel.naturalWidth / PHOTO_NATURAL_WIDTH) * photo.width }}
            >
              <Image src={panel.src} alt="" fill sizes="400px" className={`object-cover ${panel.position}`} priority />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
