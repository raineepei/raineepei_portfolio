import LeftNav from "@/components/LeftNav";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <LeftNav />
      <HomeHero />
    </div>
  );
}
