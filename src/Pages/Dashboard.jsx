import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Disputes from "./Disputes";

const Dashboard = () => {
  const navigate = useNavigate();
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [showSendModal, setShowSendModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [showConvertModal, setShowConvertModal] = useState(false);
  const [copied, setCopied] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("TZS");
  const [convertAmount, setConvertAmount] = useState("792.50");
  const [sendForm, setSendForm] = useState({
    bank: "",
    accountNumber: "",
    amount: "",
    narration: "",
  });

  const banks = [
    "Access Bank",
    "First Bank",
    "GTBank",
    "UBA",
    "Zenith Bank",
    "Kuda Bank",
    "OPay",
    "Palmpay",
  ];

  const conversionRate = 1.87;
  const convertedAmount = (parseFloat(convertAmount) * conversionRate).toFixed(2);
  const conversionFee = (parseFloat(convertAmount) * 0.001).toFixed(2);

  const handleSendFormChange = (e) => {
    setSendForm({ ...sendForm, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    if (!sendForm.bank || !sendForm.accountNumber || !sendForm.amount) {
      alert("Please fill in all required fields.");
      return;
    }
    alert(`Sending ₦${sendForm.amount} to account ${sendForm.accountNumber}`);
    setShowSendModal(false);
    setSendForm({ bank: "", accountNumber: "", amount: "", narration: "" });
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleCopyAll = () => {
    const details = `Bank Name: Remit\nAccount Name: Yusuf Mariam\nAccount Number: 705055530`;
    navigator.clipboard.writeText(details);
    setCopied("all");
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSwapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      label: "Transactions",
      path: "/transactions",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      label: "Disputes",
      path: "/disputes",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      label: "Settings",
      path: "/settings",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  const beneficiaries = [
    { name: "Muhammad Abdullah", color: "bg-orange-400" },
    { name: "Janet Jackson", color: "bg-purple-400" },
    { name: "Maryam Yusuf", color: "bg-green-400" },
  ];

  const recipients = [
    { name: "Abdullahi Abiodun", img: "https://i.pravatar.cc/40?img=1" },
    { name: "Abdullahi Abiodun", img: "https://i.pravatar.cc/40?img=2" },
    { name: "Mopelola Khadijah", img: "https://i.pravatar.cc/40?img=3" },
    { name: "Ridwan Jimoh", img: "https://i.pravatar.cc/40?img=4" },
    { name: "Ridwan Jimoh", img: "https://i.pravatar.cc/40?img=5" },
    { name: "Ibrahim Mashood", img: "https://i.pravatar.cc/40?img=6" },
  ];

  const transactions = [
    {
      type: "Funding Received",
      date: "Feb 10, 2026",
      amount: "₦300",
      status: "Completed",
      statusColor: "bg-green-100 text-green-600",
      icon: "💰",
      iconBg: "bg-green-100",
    },
    {
      type: "Money Debit",
      date: "March 5, 2026",
      amount: "₦300",
      status: "Completed",
      statusColor: "bg-green-100 text-green-600",
      icon: "💸",
      iconBg: "bg-red-100",
    },
    {
      type: "Monthly Subscription",
      date: "March 2, 2026",
      amount: "₦300",
      status: "Refunded",
      statusColor: "bg-blue-100 text-blue-600",
      icon: "📶",
      iconBg: "bg-blue-100",
    },
    {
      type: "Utility Bills",
      date: "March 6, 2026",
      amount: "₦300",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-500",
      icon: "🧾",
      iconBg: "bg-gray-100",
    },
  ];

  return (
    <>
      {/* ===== SEND MONEY MODAL ===== */}
      {showSendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowSendModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 z-50">

            {/* Close Button */}
            <button
              onClick={() => setShowSendModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-6">
              Send Money
            </h2>

            <div className="flex flex-col gap-4">

              {/* Bank Dropdown */}
              <div className="relative">
                <select
                  name="bank"
                  value={sendForm.bank}
                  onChange={handleSendFormChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-500 outline-none focus:ring-2 focus:ring-blue-400 appearance-none bg-white cursor-pointer"
                >
                  <option value="" disabled>Bank</option>
                  {banks.map((bank) => (
                    <option key={bank} value={bank}>{bank}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Account Number */}
              <input
                type="text"
                name="accountNumber"
                value={sendForm.accountNumber}
                onChange={handleSendFormChange}
                placeholder="Beneficiary account number"
                maxLength={10}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Auto Account Name */}
              {sendForm.accountNumber.length === 10 && (
                <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-xs text-blue-400 mb-0.5">Account Name</p>
                  <p className="text-sm font-medium text-blue-700">John Doe</p>
                </div>
              )}

              {/* Amount */}
              <input
                type="number"
                name="amount"
                value={sendForm.amount}
                onChange={handleSendFormChange}
                placeholder="Amount"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Narration */}
              <input
                type="text"
                name="narration"
                value={sendForm.narration}
                onChange={handleSendFormChange}
                placeholder="Narration"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl text-sm font-semibold transition-colors mt-2"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== RECEIVE MONEY MODAL ===== */}
      {showReceiveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowReceiveModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 z-50">

            {/* Close Button */}
            <button
              onClick={() => setShowReceiveModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-8">
              Receive Money
            </h2>

            <div className="flex flex-col gap-6">

              {/* Bank Name */}
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-500">Bank Name</p>
                <p className="text-base font-semibold text-gray-800">Remit</p>
                <div className="border-b border-gray-100 mt-2" />
              </div>

              {/* Account Name */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Name</p>
                    <p className="text-base font-semibold text-gray-800">Yusuf Mariam</p>
                  </div>
                  <button
                    onClick={() => handleCopy("Yusuf Mariam", "accountName")}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {copied === "accountName" ? (
                      <span className="text-xs text-green-500 font-medium">Copied!</span>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="border-b border-gray-100 mt-2" />
              </div>

              {/* Account Number */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Number</p>
                    <p className="text-base font-semibold text-gray-800">705055530</p>
                  </div>
                  <button
                    onClick={() => handleCopy("705055530", "accountNumber")}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {copied === "accountNumber" ? (
                      <span className="text-xs text-green-500 font-medium">Copied!</span>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="border-b border-gray-100 mt-2" />
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopyAll}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl text-sm font-semibold transition-colors mt-2"
              >
                {copied === "all" ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== CONVERT MONEY MODAL ===== */}
      {showConvertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowConvertModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 z-50">

            {/* Close Button */}
            <button
              onClick={() => setShowConvertModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Convert Money
            </h2>

            {/* From Currency Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">
                    {fromCurrency === "NGN" ? "🇳🇬" : "🇹🇿"}
                  </span>
                  <span className="font-semibold text-gray-800">{fromCurrency}</span>
                  <button onClick={() => setFromCurrency(fromCurrency === "NGN" ? "TZS" : "NGN")}>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <button className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Send
                </button>
              </div>
              <input
                type="number"
                value={convertAmount}
                onChange={(e) => setConvertAmount(e.target.value)}
                className="w-full text-2xl font-bold text-gray-800 outline-none border-none"
                placeholder="0.00"
              />
              <p className="text-sm text-gray-400 mt-1">
                Total balance ₦{parseFloat(convertAmount || 0).toFixed(2)}
              </p>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center -my-1 z-10 relative">
              <button
                onClick={handleSwapCurrency}
                className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </button>
            </div>

            {/* To Currency Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 mt-2 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">
                    {toCurrency === "TZS" ? "🇹🇿" : "🇳🇬"}
                  </span>
                  <span className="font-semibold text-gray-800">{toCurrency}</span>
                  <button onClick={() => setToCurrency(toCurrency === "TZS" ? "NGN" : "TZS")}>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <button className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Receive
                </button>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                TGS {isNaN(convertedAmount) ? "0.00" : convertedAmount}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Total balance TGS {isNaN(convertedAmount) ? "0.00" : convertedAmount}
              </p>
            </div>

            {/* Transaction Details */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">Transaction details</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Conversion fee</p>
                  <p className="text-sm font-medium text-gray-800">
                    ₦{isNaN(conversionFee) ? "0.00" : conversionFee}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Total amount we'll convert</p>
                  <p className="text-sm font-medium text-gray-800">
                    ₦{isNaN(convertedAmount) ? "0.00" : convertedAmount}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Rate</p>
                  <p className="text-sm font-medium text-gray-800">{conversionRate}</p>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={() => {
                alert(`Converting ₦${convertAmount} to ${toCurrency}`);
                setShowConvertModal(false);
              }}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ===== MAIN DASHBOARD ===== */}
      <div className="min-h-screen bg-gray-100 flex">

        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col px-6 py-6 fixed h-full z-20">

          {/* Logo */}
          <div
            className="flex items-center gap-2 mb-10 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">R</span>
            </div>
            <span className="text-lg font-bold text-gray-800">Remit</span>
          </div>

          {/* Main Menu */}
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Main Menu</p>
          <nav className="flex flex-col gap-1 mb-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
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
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Beneficiaries</p>
          <div className="flex flex-col gap-3">
            {beneficiaries.map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-3 cursor-pointer hover:opacity-80"
              >
                <div className={`w-8 h-8 rounded-full ${person.color} flex items-center justify-center`}>
                  <span className="text-white text-xs font-semibold">{person.name.charAt(0)}</span>
                </div>
                <span className="text-sm text-gray-600">{person.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 flex flex-col">

          {/* Navbar */}
          <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
            <span className="text-base font-semibold text-gray-700">Dashboard</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 w-64">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="bg-transparent text-sm text-gray-500 outline-none w-full"
                />
              </div>
              <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">U</span>
                </div>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="flex-1 px-8 py-6">

            {/* Top Row */}
            <div className="flex gap-4 mb-6">

              {/* Balance Card */}
              <div className="bg-blue-900 text-white rounded-2xl p-6 flex-1">
                <p className="text-sm text-blue-300 mb-1">Available Balance</p>
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold">
                    {balanceVisible ? "1,300,000.00 NGN" : "••••••••••"}
                  </h2>
                  <button
                    onClick={() => setBalanceVisible(!balanceVisible)}
                    className="text-blue-300 hover:text-white transition-colors"
                  >
                    {balanceVisible ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setShowSendModal(true)}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Send
                  </button>
                  <button
                    onClick={() => setShowReceiveModal(true)}
                    className="flex-1 bg-transparent border border-blue-400 hover:bg-blue-800 text-white py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Receive
                  </button>
                  <button
                    onClick={() => setShowConvertModal(true)}
                    className="flex-1 bg-transparent border border-blue-400 hover:bg-blue-800 text-white py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Convert
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="flex flex-col gap-4">

                {/* Income */}
                <div className="bg-white rounded-2xl p-4 border border-gray-200 w-48">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400">Income</span>
                  </div>
                  <p className="text-lg font-bold text-gray-800">₦150,000</p>
                  <div className="flex items-end gap-1 mt-2 h-8">
                    {[3, 5, 4, 7, 6, 8, 5].map((h, i) => (
                      <div key={i}
                        className={`w-2 rounded-sm ${i === 5 ? "bg-green-500" : "bg-green-200"}`}
                        style={{ height: `${h * 4}px` }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-green-500 mt-1">+6.0% Increase</p>
                </div>

                {/* Expenses */}
                <div className="bg-white rounded-2xl p-4 border border-gray-200 w-48">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400">Expenses</span>
                  </div>
                  <p className="text-lg font-bold text-gray-800">₦85,000</p>
                  <div className="flex items-end gap-1 mt-2 h-8">
                    {[6, 4, 7, 3, 5, 8, 4].map((h, i) => (
                      <div key={i}
                        className={`w-2 rounded-sm ${i === 5 ? "bg-red-500" : "bg-red-200"}`}
                        style={{ height: `${h * 4}px` }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-red-500 mt-1">-2.1% Average</p>
                </div>
              </div>
            </div>

            {/* Recipients */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800 mb-4">Recipients</h3>
              <div className="grid grid-cols-3 gap-3">
                {recipients.map((person, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer hover:shadow-sm transition-shadow"
                  >
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-700 font-medium">{person.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-gray-800">Transaction History</h3>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                  View full History
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-4 text-xs text-gray-400 pb-2 border-b border-gray-100 mb-2">
                <span>Transaction type</span>
                <span>Date</span>
                <span>Amount</span>
                <span>Status</span>
              </div>

              {/* Transactions List */}
              <div className="flex flex-col divide-y divide-gray-50">
                {transactions.map((tx, index) => (
                  <div key={index} className="grid grid-cols-4 items-center py-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${tx.iconBg} flex items-center justify-center text-base`}>
                        {tx.icon}
                      </div>
                      <span className="text-gray-700">{tx.type}</span>
                    </div>
                    <span className="text-gray-400">{tx.date}</span>
                    <span className="text-gray-700 font-medium">{tx.amount}</span>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${tx.statusColor}`}>
                        {tx.status}
                      </span>
                      <button className="text-xs text-gray-400 hover:text-gray-600">
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;