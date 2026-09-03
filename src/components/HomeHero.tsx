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
const TRAIL_LIFETIME_MS = 500;
const TRAIL_MIN_DISTANCE = 28;
const LEAVE_FADE_MS = 300;
const STAR_CROSS_RADIUS = 45;
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

type TrailStar = {
  id: number;
  x: number;
  y: number;
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

  return PHOTOS.map((src, index) => {
    const width = Math.round(180 + Math.random() * 160);
    const height = width * (PHOTO_INTRINSIC_HEIGHT / PHOTO_INTRINSIC_WIDTH);
    const rotation = rotations[index];
    const isSideways = rotation === 90 || rotation === 270;
    const boxWidth = isSideways ? height : width;
    const boxHeight = isSideways ? width : height;
    const paddingX = boxWidth / 2;
    const paddingY = boxHeight / 2;
    const x = paddingX + Math.random() * Math.max(containerWidth - paddingX * 2, 0);
    const y = paddingY + Math.random() * Math.max(containerHeight - paddingY * 2, 0);
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
  const [trail, setTrail] = useState<TrailStar[]>([]);
  const wasOverStarRef = useRef(false);
  const lastTrailPosRef = useRef<{ x: number; y: number } | null>(null);
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
    lastTrailPosRef.current = null;
    leaveTimeoutRef.current = setTimeout(() => {
      setPhotos([]);
      setTrail([]);
    }, LEAVE_FADE_MS);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lastTrail = lastTrailPosRef.current;
    const trailDist = lastTrail ? Math.hypot(x - lastTrail.x, y - lastTrail.y) : Infinity;
    if (trailDist >= TRAIL_MIN_DISTANCE) {
      lastTrailPosRef.current = { x, y };
      const trailId = uid++;
      setTrail((current) => [...current, { id: trailId, x, y }]);
      setTimeout(() => {
        setTrail((current) => current.filter((star) => star.id !== trailId));
      }, TRAIL_LIFETIME_MS);
    }

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
      style={isOverStar ? { cursor: 'url("/images/cursor/star-filled.svg") 9 11, pointer' } : undefined}
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

        {trail.map((star) => (
          <Image
            key={star.id}
            src="/images/cursor/star-filled.svg"
            alt=""
            width={18}
            height={21}
            className="trail-dot pointer-events-none absolute"
            style={{ left: star.x, top: star.y }}
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
