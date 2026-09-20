"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CAPSULES = [
  {
    hero: "/images/photography/DSCF1238.jpg",
    href: "/playground/grid",
    width: 346,
    height: 434,
  },
  {
    hero: "/images/photography-capsule/DSCF1381.jpg",
    href: "/playground/capsule",
    width: 509,
    height: 339,
  },
  {
    hero: "/images/photography-kellypark/DSCF1628.jpg",
    href: undefined,
    width: 509,
    height: 339,
  },
];

export default function PhotographySlideshow() {
  const [index, setIndex] = useState(0);
  const capsule = CAPSULES[index];

  const photo = (
    <Image
      src={capsule.hero}
      alt=""
      fill
      sizes={`${capsule.width}px`}
      className="object-cover"
      priority
    />
  );

  return (
    <div className="flex flex-col items-center gap-[30px]">
      <div className="flex h-[434px] items-center justify-center">
        {capsule.href ? (
          <Link
            href={capsule.href}
            className="relative"
            style={{ width: capsule.width, height: capsule.height }}
          >
            {photo}
          </Link>
        ) : (
          <div className="relative" style={{ width: capsule.width, height: capsule.height }}>
            {photo}
          </div>
        )}
      </div>
      <div className="flex items-center gap-[10px]">
        {CAPSULES.map((c, i) => (
          <button
            key={c.hero}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to capsule ${i + 1}`}
            className="flex size-[10px] items-center justify-center"
          >
            {i === index ? (
              <svg width="10" height="10" viewBox="5.43 5.43 12.14 12.14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.25696 7.66989C9.91244 5.42853 13.0876 5.42853 13.743 7.66989C13.9668 8.43496 14.565 9.03322 15.3301 9.25696C17.5715 9.91244 17.5715 13.0876 15.3301 13.743C14.565 13.9668 13.9668 14.565 13.743 15.3301C13.0876 17.5715 9.91244 17.5715 9.25696 15.3301C9.03322 14.565 8.43496 13.9668 7.66989 13.743C5.42853 13.0876 5.42853 9.91244 7.66989 9.25696C8.43496 9.03322 9.03322 8.43496 9.25696 7.66989Z"
                  fill="#0857C3"
                />
              </svg>
            ) : (
              <span className="block size-[10px] rounded-full bg-[#d9d9d9]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
