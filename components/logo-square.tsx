import Image from "next/image";
import Link from "next/link";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  const height = size === "sm" ? 28 : 40;
  return (
    <Link href="/" prefetch={true} className="flex items-center" aria-label="Guardomation home">
      <Image
        src="/brand/guardomation-logo.jpg"
        alt="Guardomation — Machine Guarding Solutions"
        width={size === "sm" ? 140 : 200}
        height={height}
        priority
        className="h-auto w-auto object-contain"
        style={{ height: `${height}px`, maxHeight: `${height}px` }}
      />
    </Link>
  );
}
