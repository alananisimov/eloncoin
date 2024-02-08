import Image from "next/image";
import img from "~/../public/download.png";
export default function Logo({ className }: { className: string }) {
  return <Image src={img} alt="" className={className} priority />;
}
