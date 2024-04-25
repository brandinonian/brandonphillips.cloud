import Link from "next/link";

export default function NavLink({text, link}) {
  return (
    <Link href={link}>
      <div className="bg-blue-400 hover:bg-blue-300 p-4 px-8">
        {text}
      </div>
    </Link>
  );
}