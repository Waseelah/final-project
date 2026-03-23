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
      <aside className="w-64 bg-white border-r p-4">
        <h1 className="text-lg font-semibold mb-6">Remit</h1>

        <p className="text-xs text-gray-400 mb-2">Main Menu</p>
        <div className="space-y-2">
          {navItem("/dashboard", "Dashboard")}
          {navItem("/dashboard/transactions", "Transactions")}
            {navItem("disputes", "Disputes")}
          {navItem("/dashboard/pin-setup", "Settings")}        </div>

        {/* Beneficiaries */}
        <div className="mt-8">
          <p className="text-xs text-gray-400 mb-2">Beneficiaries</p>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Muhammad Abdullah</p>
            <p>Janet Jackson</p>
            <p>Maryam Yusuf</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <div className="bg-white border-b px-6 py-3 flex justify-between items-center">
          <h2 className="font-semibold">Dashboard</h2>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search for anything..."
              className="border rounded-full px-4 py-1 text-sm outline-none"
            />
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
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