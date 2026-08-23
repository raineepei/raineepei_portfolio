import LeftNav from "@/components/LeftNav";
import AppleBite from "@/components/AppleBite";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <LeftNav />
      <div className="flex flex-1 items-center justify-center">
        <AppleBite />
      </div>
    </div>
  );
}
