import Image from "next/image";

const BASE = "/images/photography-kellypark";

export default function PhotographyKellyParkGallery() {
  return (
    <div className="flex w-[537px] flex-col items-center gap-[65px]">
      <div className="relative h-[358px] w-full">
        <Image src={`${BASE}/DSCF1511.jpg`} alt="" fill sizes="537px" className="object-cover" />
      </div>

      <div className="flex w-[367px] flex-col items-start">
        <div className="flex items-center">
          <div className="relative h-[151.613px] w-[122.333px]">
            <Image src={`${BASE}/DSCF1632.jpg`} alt="" fill sizes="123px" className="object-cover" />
          </div>
          <div className="relative h-[151.613px] w-[122.333px]">
            <Image src={`${BASE}/DSCF1635.jpg`} alt="" fill sizes="123px" className="object-cover" />
          </div>
          <div className="relative h-[151.613px] w-[122.333px]">
            <Image src={`${BASE}/DSCF1634.jpg`} alt="" fill sizes="123px" className="object-cover" />
          </div>
        </div>
        <div className="relative w-full aspect-[1828/832]">
          <Image src={`${BASE}/DSCF1611.jpg`} alt="" fill sizes="367px" className="object-cover" />
        </div>
        <div className="relative w-full aspect-[1828/697]">
          <Image src={`${BASE}/DSCF1608.jpg`} alt="" fill sizes="367px" className="object-cover" />
        </div>
      </div>

      <div className="relative h-[551px] w-[367px]">
        <Image src={`${BASE}/DSCF1659.jpg`} alt="" fill sizes="367px" className="object-cover" />
      </div>

      <div className="relative h-[358px] w-full">
        <Image src={`${BASE}/DSCF1478.jpg`} alt="" fill sizes="537px" className="object-cover" />
      </div>

      <div className="relative h-[551px] w-[367px]">
        <Image src={`${BASE}/DSCF1527.jpg`} alt="" fill sizes="367px" className="object-cover" />
      </div>

      <div className="relative h-[551px] w-[367px]">
        <Image src={`${BASE}/DSCF1587.jpg`} alt="" fill sizes="367px" className="object-cover" />
      </div>

      <div className="relative h-[551px] w-[367px]">
        <Image src={`${BASE}/DSCF1488.jpg`} alt="" fill sizes="367px" className="object-cover" />
      </div>

      <div className="flex w-[367px] flex-col items-start">
        <div className="relative w-full aspect-[1828/1143]">
          <Image src={`${BASE}/DSCF1545.jpg`} alt="" fill sizes="367px" className="object-cover" />
        </div>
        <div className="relative w-full aspect-[1828/1142]">
          <Image src={`${BASE}/DSCF1546.jpg`} alt="" fill sizes="367px" className="object-cover" />
        </div>
      </div>

      <div className="relative h-[551px] w-[367px]">
        <Image src={`${BASE}/DSCF1604.jpg`} alt="" fill sizes="367px" className="object-cover" />
      </div>

      <div className="relative h-[358px] w-full">
        <Image src={`${BASE}/DSCF1675.jpg`} alt="" fill sizes="537px" className="object-cover" />
      </div>

      <div className="flex w-[367px] flex-col items-start">
        <div className="relative h-[229px] w-full">
          <Image src={`${BASE}/DSCF1593.jpg`} alt="" fill sizes="367px" className="object-cover" />
        </div>
        <div className="relative h-[229px] w-full">
          <Image src={`${BASE}/DSCF1590.jpg`} alt="" fill sizes="367px" className="object-cover" />
        </div>
      </div>

      <div className="relative h-[358px] w-full">
        <Image src={`${BASE}/DSCF1496.jpg`} alt="" fill sizes="537px" className="object-cover" />
      </div>

      <div className="relative h-[551px] w-[367px]">
        <Image src={`${BASE}/DSCF1531.jpg`} alt="" fill sizes="367px" className="object-cover" />
      </div>

      <div className="relative h-[551px] w-[367px]">
        <Image src={`${BASE}/DSCF1584.jpg`} alt="" fill sizes="367px" className="object-cover" />
      </div>
    </div>
  );
}
