import Link from "next/link";

export default function LinkButton({ text, link }) {
  return (
    <Link href={link}>
      <div className="bg-blue-400 flex w-full px-16 py-8 items-center justify-center text-2xl rounded-lg shadow-xl hover:bg-blue-300">
        {text}
      </div>
    </Link>
  );
}