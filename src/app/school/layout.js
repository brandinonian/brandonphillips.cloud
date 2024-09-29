import NavLink from "../componenets/NavLink";

const metadata = {
  title: "Davis Tech Portfolio",
  description: "Portfolio of course work completed while attending Davis Technical College."
}

export default function SchoolLayout({ children }) {
  return (
    <main className="flex flex-col min-h-screen bg-grey-500 text-display-300">
      <div className="flex flex-row border-b-2 border-grey-300">
        <NavLink link={'/'} text={'Home'} />
        <NavLink link={'/school'} text={'School Home'} />
      </div>
      <div className="bg-grey-400">
        {children}
      </div>
    </main>
  );
}