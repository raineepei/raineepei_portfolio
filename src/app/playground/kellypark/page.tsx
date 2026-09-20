import LeftNav from "@/components/LeftNav";
import PhotographyKellyParkGallery from "@/components/PhotographyKellyParkGallery";

export const metadata = {
  title: "Photography — Rainee Pei",
};

export default function PhotographyKellyParkPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="flex justify-center py-11.5">
        <PhotographyKellyParkGallery />
      </div>
      <LeftNav minimal back="/playground" fixed className="z-10" />
    </div>
  );
}
