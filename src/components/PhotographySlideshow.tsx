"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PHOTOS = [
  "/images/photography/DSCF1238.jpg",
  "/images/photography/DSCF1085-2.jpg",
  "/images/photography/DSCF1161-2.jpg",
  "/images/photography/DSCF1189-2.jpg",
  "/images/photography/DSCF1131-2.jpg",
  "/images/photography/DSCF1079-2.jpg",
  "/images/photography/DSCF1220-2.jpg",
  "/images/photography/DSCF1279-2.jpg",
  "/images/photography/DSCF1201-2.jpg",
];

export default function PhotographySlideshow() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex w-[346px] flex-col items-center gap-[30px]">
      <Link href="/playground/grid" className="relative h-[434px] w-full">
        <Image
          src={PHOTOS[index]}
          alt=""
          fill
          sizes="346px"
          className="object-cover"
          priority
        />
      </Link>
      <div className="flex items-center gap-[10px]">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
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
