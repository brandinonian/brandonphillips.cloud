import Link from "next/link";
import LinkButton from "./componenets/LinkButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-20 items-center justify-center bg-blue-500 p-24">
      <div className="text-7xl">Hello, Next!</div>
      <div className="flex flex-col text-2xl text-center gap-10">
        <LinkButton text="School Work" link="/school" />
      </div>
    </main>
  );
}
