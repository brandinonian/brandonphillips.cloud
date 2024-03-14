import Link from "next/link";

const metadata = {
  title: "Davis Tech Portfolio",
  description: "Portfolio of course work completed while attending Davis Technical College."
}

export default function SchoolLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-blue-400">
      <div className="flex flex-row gap-12 p-4">
        <Link href='/'>Home</Link>
        <Link href='/school'>School Home</Link>
      </div>
      <div className="bg-blue-500">
        {children}
      </div>
    </div>
  );
}