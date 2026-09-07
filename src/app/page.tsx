import Image from "next/image";
import LeftNav from "@/components/LeftNav";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <LeftNav />
      <div className="bg-grid-pattern flex flex-1 items-end justify-end overflow-hidden pt-16 pr-[40px] pb-[46px]">
        <Image
          src="/images/home/hello-wordmark.svg"
          alt=""
          width={759}
          height={173}
          priority
        />
      </div>
    </div>
  );
}
