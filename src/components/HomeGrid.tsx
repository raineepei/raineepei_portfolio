"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const CELL_WIDTH = 20;
const ROW_CYCLE = 22;
// Within each 22px row cycle the grid has a doubled line pair near one edge,
// leaving an 18px "big" cell and a 2px sliver between the two close lines.
const BIG_CELL_START = 3; // distance-from-bottom where the big cell begins
const BIG_CELL_HEIGHT = 18;
const HIGHLIGHT_LIFETIME_MS = 1400;

type HighlightedCell = {
  id: number;
  left: number;
  top: number;
};

let uid = 0;

export default function HomeGrid() {
  const [highlights, setHighlights] = useState<HighlightedCell[]>([]);
  const lastCellKeyRef = useRef<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const distFromBottom = rect.height - y;
    const cycleIndex = Math.floor((distFromBottom - BIG_CELL_START) / ROW_CYCLE);
    const cyclePos = distFromBottom - BIG_CELL_START - cycleIndex * ROW_CYCLE;

    if (cyclePos < 0 || cyclePos >= BIG_CELL_HEIGHT) {
      // inside the thin sliver row between the doubled lines — no fill
      lastCellKeyRef.current = null;
      return;
    }

    const colFromRight = Math.floor((rect.width - x) / CELL_WIDTH);
    const key = `${colFromRight}_${cycleIndex}`;

    if (key === lastCellKeyRef.current) return;
    lastCellKeyRef.current = key;

    const left = rect.width - (colFromRight + 1) * CELL_WIDTH;
    const cellBottomDist = BIG_CELL_START + cycleIndex * ROW_CYCLE + BIG_CELL_HEIGHT;
    const top = rect.height - cellBottomDist;

    const id = uid++;
    setHighlights((current) => [...current, { id, left, top }]);
    setTimeout(() => {
      setHighlights((current) => current.filter((cell) => cell.id !== id));
    }, HIGHLIGHT_LIFETIME_MS);
  };

  const handleMouseLeave = () => {
    lastCellKeyRef.current = null;
  };

  return (
    <div
      className="bg-grid-pattern relative flex flex-1 items-end justify-end overflow-hidden pt-16 pr-[40px] pb-[46px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {highlights.map((cell) => (
        <div
          key={cell.id}
          className="grid-cell-highlight pointer-events-none absolute"
          style={{
            left: cell.left,
            top: cell.top,
            width: CELL_WIDTH,
            height: BIG_CELL_HEIGHT,
            backgroundColor: "#0857C3",
          }}
        />
      ))}

      <Image
        src="/images/home/hello-wordmark.svg"
        alt=""
        width={759}
        height={173}
        className="relative"
        priority
      />
    </div>
  );
}
