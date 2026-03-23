import React, { useRef, useState } from "react";

const PinSetup = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [confirmPin, setConfirmPin] = useState(["", "", "", ""]);
  const pinInputsRef = useRef([]);
  const confirmInputsRef = useRef([]);

  const handleChange = (value, index, type) => {
    if (!/^\d?$/.test(value)) return;

    if (type === "pin") {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      if (value && index < 3) {
        pinInputsRef.current[index + 1].focus();
      }
    } else {
      const newConfirm = [...confirmPin];
      newConfirm[index] = value;
      setConfirmPin(newConfirm);
      if (value && index < 3) {
        confirmInputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index, type) => {
    if (e.key === "Backspace") {
      if (type === "pin") {
        if (!pin[index] && index > 0) {
          pinInputsRef.current[index - 1].focus();
        }
      } else {
        if (!confirmPin[index] && index > 0) {
          confirmInputsRef.current[index - 1].focus();
        }
      }
    }
  };

  const handleSubmit = () => {
    const pinValue = pin.join("");
    const confirmValue = confirmPin.join("");

    if (pinValue.length < 4 || confirmValue.length < 4) {
      alert("Please fill in all PIN fields.");
      return;
    }
    if (pinValue !== confirmValue) {
      alert("PINs do not match. Please try again.");
      return;
    }
    alert("PIN created successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col px-6 py-6 fixed h-full">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">R</span>
          </div>
          <span className="text-lg font-bold text-gray-800">Remit</span>
        </div>

        {/* Main Menu */}
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
          Main Menu
        </p>
        <nav className="flex flex-col gap-1 mb-8">
          {[
            { label: "Dashboard", icon: "🏠" },
            { label: "Transactions", icon: "💳" },
            { label: "Disputes", icon: "⚠️" },
            { label: "Settings", icon: "⚙️" },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-left transition-colors ${
                item.label === "Dashboard"
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Beneficiaries */}
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
          Beneficiaries
        </p>
        <div className="flex flex-col gap-3">
          {[
            { name: "Muhammad Abdullah", color: "bg-orange-400" },
            { name: "Janet Jackson", color: "bg-purple-400" },
            { name: "Maryam Yusuf", color: "bg-green-400" },
          ].map((person) => (
            <div
              key={person.name}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80"
            >
              <div
                className={`w-8 h-8 rounded-full ${person.color} flex items-center justify-center`}
              >
                <span className="text-white text-xs font-semibold">
                  {person.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm text-gray-600">{person.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">

        {/* Top Navbar */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <span className="text-base font-semibold text-gray-700">
            Dashboard
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 w-64">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for anything..."
                className="bg-transparent text-sm text-gray-500 outline-none w-full"
              />
            </div>
            {/* Notification Bell */}
            <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            {/* User Avatar */}
            <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center cursor-pointer">
              <span className="text-white text-sm font-semibold">U</span>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 px-10 py-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span>Home</span>
            <span>&gt;</span>
            <span>Profile</span>
            <span>&gt;</span>
            <span>Pin setup</span>
            <span>&gt;</span>
          </div>

          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Pin Setup</h1>

          {/* Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Security Setup
            </h2>
            <p className="text-sm text-blue-400 mb-10">
              Create a 4-digit PIN for authorizing transactions.
            </p>

            {/* New PIN */}
            <div className="flex flex-col items-center mb-8">
              <p className="text-sm text-gray-500 mb-4">New Transaction PIN</p>
              <div className="flex gap-4">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    type="password"
                    maxLength="1"
                    value={digit}
                    ref={(el) => (pinInputsRef.current[index] = el)}
                    onChange={(e) => handleChange(e.target.value, index, "pin")}
                    onKeyDown={(e) => handleKeyDown(e, index, "pin")}
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none bg-white"
                  />
                ))}
              </div>
            </div>

            {/* Confirm PIN */}
            <div className="flex flex-col items-center mb-6">
              <p className="text-sm text-gray-500 mb-4">
                Confirm Transaction PIN
              </p>
              <div className="flex gap-4">
                {confirmPin.map((digit, index) => (
                  <input
                    key={index}
                    type="password"
                    maxLength="1"
                    value={digit}
                    ref={(el) => (confirmInputsRef.current[index] = el)}
                    onChange={(e) =>
                      handleChange(e.target.value, index, "confirm")
                    }
                    onKeyDown={(e) => handleKeyDown(e, index, "confirm")}
                    className="w-12 h-12 text-center text-xl border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none bg-white"
                  />
                ))}
              </div>
            </div>

            {/* Encrypted Label */}
            <p className="text-xs text-gray-400 text-center tracking-widest uppercase mt-4">
              Encrypted &amp; Secure
            </p>
          </div>

          {/* Create PIN Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleSubmit}
              className="w-72 py-3 border border-gray-400 rounded-full bg-white hover:bg-gray-50 text-sm font-medium transition-colors"
            >
              Create PIN
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PinSetup;