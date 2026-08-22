import Image from "next/image";

export default function PixelHandsIcon() {
  return (
    <Image
      src="/images/icons/pixel-hands.png"
      alt=""
      width={20}
      height={20}
      className="[image-rendering:pixelated]"
    />
  );
}
