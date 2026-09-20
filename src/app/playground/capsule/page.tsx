import LeftNav from "@/components/LeftNav";
import PhotographyCapsuleGallery from "@/components/PhotographyCapsuleGallery";

export const metadata = {
  title: "Photography — Rainee Pei",
};

export default function PhotographyCapsulePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="flex justify-center py-11.5">
        <PhotographyCapsuleGallery />
      </div>
      <LeftNav minimal fixed className="z-10" />
    </div>
  );
}
