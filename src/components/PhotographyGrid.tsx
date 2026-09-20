import Image from "next/image";

const PHOTOS = [
  "/images/photography/DSCF1220-2.jpg",
  "/images/photography/DSCF1279-2.jpg",
  "/images/photography/DSCF1201-2.jpg",
  "/images/photography/DSCF1238.jpg",
  "/images/photography/DSCF1085-2.jpg",
  "/images/photography/DSCF1161-2.jpg",
  "/images/photography/DSCF1189-2.jpg",
  "/images/photography/DSCF1131-2.jpg",
  "/images/photography/DSCF1079-2.jpg",
];

export default function PhotographyGrid() {
  return (
    <div className="grid w-[580px] grid-cols-3 gap-[3px]">
      {PHOTOS.map((photo) => (
        <div key={photo} className="relative aspect-[4/5]">
          <Image src={photo} alt="" fill sizes="195px" className="object-cover" />
        </div>
      ))}
    </div>
  );
}
