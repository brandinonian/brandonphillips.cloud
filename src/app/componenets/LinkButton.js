import Link from "next/link";

export default function LinkButton({ text, link }) {
  return (
    <Link href={link}>
      <div className="bg-grey-300 flex w-full px-32 py-8 items-center justify-center text-2xl rounded hover:bg-blue-300">
        {text}
      </div>
    </Link>
  );
}