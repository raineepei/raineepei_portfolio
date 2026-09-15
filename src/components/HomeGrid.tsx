"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const SPARKLE_CHARS = [...".⋆ 𖥔 ݁ ˖₊‧.⭒.‧₊˖ ݁𖥔 ݁˖ ."].filter((char) => char.trim().length > 0);
const TRAIL_MIN_DISTANCE = 15;
const TRAIL_LIFETIME_MS = 900;
const FADE_IN_INTERACTIONS = 120;

const WORDMARK_LETTERS = [
  "/images/home/letters/letter-1-h.svg",
  "/images/home/letters/letter-2-e.svg",
  "/images/home/letters/letter-3-l.svg",
  "/images/home/letters/letter-4-l.svg",
  "/images/home/letters/letter-5-o.svg",
  "/images/home/letters/letter-6-o.svg",
  "/images/home/letters/letter-7-o.svg",
  "/images/home/letters/letter-8-o.svg",
];
const INTERACTIONS_PER_LETTER = FADE_IN_INTERACTIONS / WORDMARK_LETTERS.length;

type TrailItem = {
  id: number;
  left: number;
  top: number;
  char: string;
};

let uid = 0;

export default function HomeGrid() {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const [interactionCount, setInteractionCount] = useState(0);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

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
    setInteractionCount((current) => Math.min(current + 1, FADE_IN_INTERACTIONS));
    setTimeout(() => {
      setTrail((current) => current.filter((item) => item.id !== id));
    }, TRAIL_LIFETIME_MS);
  };

  const handleMouseLeave = () => {
    lastPosRef.current = null;
  };

  return (
    <div
      className="relative flex flex-1 items-end justify-end overflow-hidden pt-16 pr-[40px] pb-[46px]"
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

      <div className="relative" style={{ width: 759, height: 173 }}>
        {WORDMARK_LETTERS.map((src, i) => {
          const opacity = Math.min(
            Math.max((interactionCount - i * INTERACTIONS_PER_LETTER) / INTERACTIONS_PER_LETTER, 0),
            1
          );
          return (
            <Image
              key={src}
              src={src}
              alt=""
              width={759}
              height={173}
              className="absolute inset-0 transition-opacity duration-500 ease-out"
              style={{ opacity }}
              priority
            />
          );
        })}
      </div>
    </div>
  );
}
