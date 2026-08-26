export default function PixelHandsIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- plain <img> avoids Next's
    // image optimizer resampling this pixel-art SVG and blurring its edges
    <img src="/images/icons/pixel-hands.svg" alt="" width={18} height={18} />
  );
}
