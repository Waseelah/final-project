import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`block px-4 py-2 rounded-lg text-sm ${
        location.pathname === path
          ? "bg-gray-200 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className=" fixed flex h-screen w-full bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white  p-4">
        <a href="/LandingPage">
        <img src="/remlogo.svg" alt="" className="color-blue" />
</a>
        <div className="mx-4">
          <p className="text-xs text-gray-400 mt-8">Main Menu</p>
          <span className="flex ">
            {" "}
            <img src="/menu.svg" alt="" /> {navItem("dashboard", "Dashboard")} <img src="/Frame 1439.svg" alt="" />
          </span>
          <span className="flex">
            {" "}
            <img src="/arrange-circle-2.svg" alt="" />
            {navItem("transaction", "Transactions")}
          </span>
          <span className="flex">
            {" "}
            <img src="/message-question.svg" alt="" />
            {navItem("disputes", "Disputes")}
          </span>
          <span className="flex">
            {" "}
            <img src="/setting-2.svg" alt="" />{" "}
            {navItem("profile", "Settings")}{" "}
          </span>{" "}
        </div>

        {/* Beneficiaries */}
        <div className="mt-8">
          <p className="text-xs text-gray-400 mb-2">Beneficiaries</p>
          <div className="space-y-4 text-sm text-gray-600 ">
            <span className="flex">
              {" "}
              <img src="/first.svg" alt="" /> <p>Muhammad Abdullah</p>
            </span>
            <span className="flex">
              <img src="/second.svg" alt="" /> <p>Janet Jackson</p>
            </span>
            <span className="flex">
              {" "}
              <img src="/third.svg" alt="" />
              <p>Maryam Yusuf</p>
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="bg-white  px-6 py-3 flex justify-between items-center">
          <h2 className="font-semibold text-[#0E1C3F]">Dashboard</h2>

          <div className="flex items-center gap-6 mx-62   ">
            <input
              type="text"
              placeholder="Search for anything..."
              className="border rounded-full px-4 py-1 text-sm outline-none"
            />
      
          </div>
                <div className="flex">
        <img src="/Frame 265.svg" alt="" />
        <img src="/Frame 271.svg" alt="" />
        </div>
        </div>

        {/* Page Content */}
        <div className="p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
