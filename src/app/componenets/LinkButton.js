import Link from "next/link";

export default function LinkButton({text, link}) {
  return (
    <div className="bg-blue-400 p-6 text-xl rounded-lg shadow-xl hover:bg-blue-300">
      <Link href={link}>{text}</Link>
    </div>
  );
}