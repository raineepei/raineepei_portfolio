import Image from "next/image";

const BASE = "/images/photography-capsule";

export default function PhotographyCapsuleGallery() {
  return (
    <div className="flex w-[537px] flex-col items-center gap-[65px]">
      <div className="relative w-full aspect-[4049/2699]">
        <Image src={`${BASE}/DSCF1375.jpg`} alt="" fill sizes="537px" className="object-cover" />
      </div>

      <div className="flex w-full flex-col items-start">
        <div className="relative h-[347px] w-full">
          <Image src={`${BASE}/DSCF1416.jpg`} alt="" fill sizes="537px" className="object-cover" />
        </div>
        <div className="relative h-[358px] w-full">
          <Image src={`${BASE}/DSCF1417.jpg`} alt="" fill sizes="537px" className="object-cover" />
        </div>
      </div>

      <div className="relative h-[551px] w-[367px]">
        <Image src={`${BASE}/DSCF1426.jpg`} alt="" fill sizes="367px" className="object-cover" />
      </div>

      <div className="relative w-full aspect-[1620/1080]">
        <Image src={`${BASE}/DSCF1381.jpg`} alt="" fill sizes="537px" className="object-cover" />
      </div>

      <div className="relative w-full aspect-[1620/1080]">
        <Image src={`${BASE}/DSCF1421.jpg`} alt="" fill sizes="537px" className="object-cover" />
      </div>

      <div className="relative w-full aspect-[1620/1080]">
        <Image src={`${BASE}/DSCF1378.jpg`} alt="" fill sizes="537px" className="object-cover" />
      </div>

      <div className="flex w-full flex-col items-start">
        <div className="relative w-full aspect-[1620/1080]">
          <Image src={`${BASE}/DSCF1383.jpg`} alt="" fill sizes="537px" className="object-cover" />
        </div>
        <div className="relative w-full aspect-[1620/1080]">
          <Image src={`${BASE}/DSCF1386.jpg`} alt="" fill sizes="537px" className="object-cover" />
        </div>
      </div>

      <div className="relative h-[551px] w-[367px]">
        <Image src={`${BASE}/DSCF1362.jpg`} alt="" fill sizes="367px" className="object-cover" />
      </div>
    </div>
  );
}
