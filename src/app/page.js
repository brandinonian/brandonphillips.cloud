import Link from "next/link";
import ContentCard from "./componenets/contentCard";
import Hero from "./componenets/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-grey-400 min-h-screen  text-display-200">
      <Hero
        title={'Brandon Phillips'}
        h2={'Software Developer'}
        h3={'Kaysville, UT'}
      />
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

