import { Outlet } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import SideBar from "../components/layout/SideBar";

const Navbar = () => {
  return (
    <main className="text-white font-Nunito">
      <TopBar />
      <div className="flex bg-[#0F0E13] ">
        <SideBar />
        <Outlet />
      </div>
    </main>
  );
};

export default Navbar;
