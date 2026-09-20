import LeftNav from "@/components/LeftNav";
import PhotographyGrid from "@/components/PhotographyGrid";

export const metadata = {
  title: "Photography — Rainee Pei",
};

export default function PhotographyGridPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute inset-0 flex items-center justify-center py-11.5">
        <PhotographyGrid />
      </div>
      <LeftNav minimal back="/playground" className="z-10" />
    </div>
  );
}
