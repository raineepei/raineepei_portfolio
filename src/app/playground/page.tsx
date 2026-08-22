import LeftNav from "@/components/LeftNav";

export const metadata = {
  title: "Playground — Rainee Pei",
};

export default function Playground() {
  return (
    <div className="flex min-h-screen bg-background">
      <LeftNav />
      <div className="flex flex-1 items-center justify-center px-[60px] py-11.5">
        <div className="flex flex-col items-start gap-2.5">
          <p className="font-cormorant text-[34px] font-bold italic text-accent">Playground</p>
          <p className="font-chivo text-xl text-black">Coming soon.</p>
        </div>
      </div>
    </div>
  );
}
