import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-grey-400 min-h-screen  text-display-200">
      <Hero />
      <div className="pt-20 pb-4 text-center">
        <p className="text-2xl md:text-4xl">Links</p>
      </div>
      <ContentCard
        title={'Davis Tech College Portfolio'}
        description={'Check out my portfolio of schoolwork completed during my time in the Davis Technical College Software Development Program'}
        link={'/school'}
        src={'/images/dtc_logo.png'}
        alt={'Davis Techo Logo'}
      />
      <div className="h-8" />
      <div className="text-center text-lg text-display-500 underline p-8">
        <Link href={'https://github.com/brandinonian'}>GitHub</Link>
      </div>
      <div className="text-center text-lg text-display-500 underline p-8">
        <Link href={'www.linkedin.com/in/brandon-phillips-844214116'}>LinkedIn</Link>
      </div>
    </main>
  );
}

function ContentCard({ title, description, link, half, src, alt }) {
  return (
    <Link href={link} className={clsx(half ? "w-1/2" : "w-full md:w-3/4")}>
      <div className="grid grid-cols-4 p-4 bg-grey-300 md:rounded md:py-6">
        <div className="flex flex-col gap-2 justify-center col-span-3 text-center">
          <p className="text-sm md:text-xl">{title}</p>
          <p className="text-xs text-left md:text-center md:px-12">{description}</p>
        </div>
        <div className="flex items-center justify-center col-span-1">
          <Image src={src} alt={alt} width={75} height={75} />
        </div>
      </div>
    </Link>
  );
}

function Hero() {
  return (
    <div className="p-4 pt-8 w-full text-center">
      <h1 className="text-4xl md:text-7xl">Brandon Phillips</h1>
      <p className="text-md md:text-xl">Software Developer</p>
      <p className="text-sm italic">Kaysville, UT</p>
    </div>
  );
}