import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function ContentCard({ title, description, link, half, src, alt }) {
  return (
    <Link href={link} className={clsx(half ? "w-1/2" : "md:w-3/4", "2xl:w-1/2")}>
      <div className="grid grid-cols-4 p-4 bg-grey-300 md:rounded md:py-6">
        <div className="flex flex-col gap-2 justify-center col-span-3 text-center">
          <p className="text-sm md:text-xl lg:text-2xl">{title}</p>
          <p className="text-xs text-left md:text-center md:px-12 lg:text-sm">{description}</p>
        </div>
        <div className="flex items-center justify-center col-span-1">
          <Image src={src} alt={alt} width={75} height={75} />
        </div>
      </div>
    </Link>
  );
}