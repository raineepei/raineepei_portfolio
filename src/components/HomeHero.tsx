"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";

const PHOTOS = [
  "/images/home/DSCF2644.jpg",
  "/images/home/DSCF2657.jpg",
  "/images/home/DSCF2658.jpg",
  "/images/home/DSCF2659.jpg",
];

const PHOTO_INTRINSIC_WIDTH = 800;
const PHOTO_INTRINSIC_HEIGHT = 533;
const LEAVE_FADE_MS = 300;
const STAR_CROSS_RADIUS = 45;
const STAR_EXCLUSION_RADIUS = 80;
const PHOTO_STAGGER_MS = 300;

type ScatteredPhoto = {
  id: number;
  src: string;
  width: number;
  x: number;
  y: number;
  rotation: number;
  zIndex: number;
  delay: number;
};

const ROTATIONS = [0, 90, 180, 270];

let uid = 0;

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function generateScatteredPhotos(containerWidth: number, containerHeight: number): ScatteredPhoto[] {
  const rotations = shuffle(ROTATIONS);
  const order = shuffle(PHOTOS.map((_, i) => i));
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  const maxDist = Math.hypot(containerWidth, containerHeight) / 2;

  return PHOTOS.map((src, index) => {
    const width = Math.round(180 + Math.random() * 160);
    const height = width * (PHOTO_INTRINSIC_HEIGHT / PHOTO_INTRINSIC_WIDTH);
    const rotation = rotations[index];
    const isSideways = rotation === 90 || rotation === 270;
    const boxWidth = isSideways ? height : width;
    const boxHeight = isSideways ? width : height;
    const paddingX = boxWidth / 2;
    const paddingY = boxHeight / 2;
    const halfDiagonal = Math.hypot(boxWidth, boxHeight) / 2;
    const minDist = STAR_EXCLUSION_RADIUS + halfDiagonal;

    let x = centerX;
    let y = centerY;
    for (let attempt = 0; attempt < 20; attempt++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = minDist + Math.random() * Math.max(maxDist - minDist, 0);
      const candidateX = Math.min(Math.max(centerX + Math.cos(angle) * dist, paddingX), containerWidth - paddingX);
      const candidateY = Math.min(Math.max(centerY + Math.sin(angle) * dist, paddingY), containerHeight - paddingY);
      if (Math.hypot(candidateX - centerX, candidateY - centerY) >= STAR_EXCLUSION_RADIUS) {
        x = candidateX;
        y = candidateY;
        break;
      }
    }

    return {
      id: uid++,
      src,
      width,
      x,
      y,
      rotation,
      zIndex: index + 1,
      delay: order[index] * PHOTO_STAGGER_MS,
    };
  });
}

export default function HomeHero() {
  const [isHovering, setIsHovering] = useState(false);
  const [isOverStar, setIsOverStar] = useState(false);
  const [photos, setPhotos] = useState<ScatteredPhoto[]>([]);
  const wasOverStarRef = useRef(false);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsOverStar(false);
    wasOverStarRef.current = false;
    leaveTimeoutRef.current = setTimeout(() => {
      setPhotos([]);
    }, LEAVE_FADE_MS);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dist = Math.hypot(x - rect.width / 2, y - rect.height / 2);
    const overStar = dist <= STAR_CROSS_RADIUS;
    setIsOverStar(overStar);

    if (overStar && !wasOverStarRef.current) {
      setPhotos(generateScatteredPhotos(rect.width, rect.height));
    }
    wasOverStarRef.current = overStar;
  };

  return (
    <div
      className="relative flex flex-1 items-center justify-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={isOverStar ? { cursor: 'url("/images/cursor/cursor-plus.svg") 5 5, pointer' } : undefined}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity ease-out"
        style={{ opacity: isHovering ? 1 : 0, transitionDuration: `${LEAVE_FADE_MS}ms` }}
      >
        {photos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.src}
            alt=""
            width={PHOTO_INTRINSIC_WIDTH}
            height={PHOTO_INTRINSIC_HEIGHT}
            className="scatter-photo absolute rounded-[4px] object-cover shadow-md"
            style={
              {
                left: photo.x,
                top: photo.y,
                width: photo.width,
                height: "auto",
                transform: `translate(-50%, -50%) rotate(${photo.rotation}deg)`,
                zIndex: photo.zIndex,
                "--photo-delay": `${photo.delay}ms`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <Image
        src="/images/home/hero-star-filled.svg"
        alt=""
        width={59}
        height={65}
        className="pointer-events-none"
      />
    </div>
  );
}
