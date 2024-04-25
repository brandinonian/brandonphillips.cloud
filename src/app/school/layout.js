import NavLink from "../componenets/NavLink";

const metadata = {
  title: "Davis Tech Portfolio",
  description: "Portfolio of course work completed while attending Davis Technical College."
}

export default function SchoolLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-blue-500">
      <div className="flex flex-row">
        <NavLink link={'/'} text={'Home'} />
        <NavLink link={'/school'} text={'School Home'} />
      </div>
      <div className="bg-grey-400">
        {children}
      </div>
    </div>
  );
}