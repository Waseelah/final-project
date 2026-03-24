import React, { useRef, useState } from "react";
import DashboardLayout from "../Pages/DashboardLayout";

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

     
      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">

       

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