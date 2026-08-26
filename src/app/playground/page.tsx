import LeftNav from "@/components/LeftNav";
import AppleBite from "@/components/AppleBite";

export const metadata = {
  title: "Playground — Rainee Pei",
};

export default function Playground() {
  return (
    <div className="flex min-h-screen bg-background">
      <LeftNav />
      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-[60px] py-11.5">
        <AppleBite width={255} height={240} />
        <p className="font-chivo text-[12px] leading-[34px] text-accent">Coming soon.</p>
      </div>
    </div>
  );
}
