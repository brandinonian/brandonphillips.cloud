import LinkButton from "./componenets/LinkButton";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col gap-20 items-center justify-center bg-blue-500 p-24">
      <div className="text-7xl">Brandon Phillips Portfolio</div>
      <div className="flex flex-col text-2xl text-center gap-10 w-1/4">
        <LinkButton text="Davis Tech Portfolio" link="/school" />
      </div>
    </main>
  );
}
