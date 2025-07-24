import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    {
      path: "home",
      icon: "squares-four",
      title: "Dashboard",
    },
    {
      path: "doctors",
      icon: "stethoscope",
      title: "Doctors",
    },
    {
      path: "patients",
      icon: "users-three",
      title: "Patients",
    },
    {
      path: "apointments",
      icon: "notepad",
      title: "Appointments",
    },
    {
      path: "departments",
      icon: "bounding-box",
      title: "Departments",
    },
    {
      path: "pharmacy",
      icon: "pill",
      title: "Pharmacy",
    },
  ];
  return (
    <aside className="h-screen w-[14%] sticky top-0 py-2">
      <header className="flex items-center gap-2 mb-16 px-5">
        <i className="ph ph-hospital text-3xl text-indigo-500"></i>
        <h1 className="text-indigo-500 font-bold text-xl">Doctor-Y</h1>
      </header>
      <nav className="flex flex-col gap-1">
        {links.map(({ path, icon, title }, id) => (
          <NavLink
            to={path}
            className={`${
              location.pathname === "/home" ? "active" : ""
            } flex items-center gap-2 px-5 py-2 text-slate-500 outline-none duration-300 hover:text-indigo-500 hover:font-bold hover:bg-indigo-500/20 hover:border-r-2 hover:border-r-indigo-500`}
            key={id}
          >
            <i className={`ph ph-${icon} text-lg font-bold`}></i>
            <p>{title}</p>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
