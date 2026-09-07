import LeftNav from "@/components/LeftNav";
import HomeGrid from "@/components/HomeGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <LeftNav />
      <HomeGrid />
    </div>
  );
}
