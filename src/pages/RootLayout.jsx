import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const RootLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full bg-slate-100">
        <Header />
        <section className="container mx-auto">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default RootLayout