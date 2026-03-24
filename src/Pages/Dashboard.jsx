import React, { useState } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { IoWifi } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdCheckCircle } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { GoXCircle } from "react-icons/go";

const Dashboard = () => {
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

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "Funding Received",
      icon: <BiSolidDollarCircle className="text-green-500" size={20} />,
      iconBg: "bg-green-100",
      date: "Feb 10, 2026",
      amount: "$300.00",
      status: "Completed",
    },
    {
      id: 2,
      type: "Money Debit",
      icon: <BiSolidDollarCircle className="text-red-500" size={20} />,
      iconBg: "bg-red-100",
      date: "March 5, 2026",
      amount: "$300.00",
      status: "Completed",
    },
    {
      id: 3,
      type: "Monthly Subscription",
      icon: <IoWifi className="text-yellow-500" size={20} />,
      iconBg: "bg-yellow-100",
      date: "March 2, 2026",
      amount: "$300.00",
      status: "Refunded",
    },
    {
      id: 4,
      type: "Utility Bills",
      icon: <FaArrowTrendUp className="text-yellow-500" size={20} />,
      iconBg: "bg-orange-100",
      date: "March 6, 2026",
      amount: "$300.00",
      status: "Canceled",
    },
  ]);

  // ✅ FIXED - getStatusStyle function
  const getStatusStyle = (status) => {
    const s = status?.trim().toLowerCase();
    switch (s) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "refunded":
        return "bg-yellow-100 text-yellow-700";
      case "canceled":
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // ✅ FIXED - getStatusIcon function
  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <MdCheckCircle size={14} className="text-green-500" />;
      case "Refunded":
        return <IoMdRefresh size={14} className="text-yellow-500" />;
      case "Canceled":
        return <GoXCircle size={14} className="text-red-500" />;
      default:
        return null;
    }
  };

  const banks = [
    "Access Bank", "First Bank", "GTBank",
    "UBA", "Zenith Bank", "Kuda Bank", "OPay", "Palmpay",
  ];

  const conversionRate = 1.87;
  const convertedAmount = (parseFloat(convertAmount) * conversionRate).toFixed(2);
  const conversionFee = (parseFloat(convertAmount) * 0.001).toFixed(2);

  const recipients = [
    { name: "Abdullahi Abiodun", img: "https://i.pravatar.cc/40?img=1" },
    { name: "Abdullahi Abiodun", img: "https://i.pravatar.cc/40?img=2" },
    { name: "Mopelola Khadijah", img: "https://i.pravatar.cc/40?img=3" },
    { name: "Ridwan Jimoh", img: "https://i.pravatar.cc/40?img=4" },
    { name: "Ridwan Jimoh", img: "https://i.pravatar.cc/40?img=5" },
    { name: "Ibrahim Mashood", img: "https://i.pravatar.cc/40?img=6" },
  ];

  const handleSendFormChange = (e) => {
    setSendForm({ ...sendForm, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    if (!sendForm.bank || !sendForm.accountNumber || !sendForm.amount) {
      alert("Please fill in all required fields.");
      return;
    }

    const newTransaction = {
      id: transactions.length + 1,
      type: "Money Debit",
      icon: <BiSolidDollarCircle className="text-red-500" size={20} />,
      iconBg: "bg-red-100",
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      amount: `₦${parseFloat(sendForm.amount).toLocaleString()}`,
      status: "Completed",
    };

    setTransactions([newTransaction, ...transactions]);
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
            <button
              onClick={() => setShowSendModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-lg font-semibold text-gray-800 text-center mb-6">Send Money</h2>

            <div className="flex flex-col gap-4">
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

              <input
                type="text"
                name="accountNumber"
                value={sendForm.accountNumber}
                onChange={handleSendFormChange}
                placeholder="Beneficiary account number"
                maxLength={10}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />

              {sendForm.accountNumber.length === 10 && (
                <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-xs text-blue-400 mb-0.5">Account Name</p>
                  <p className="text-sm font-medium text-blue-700">John Doe</p>
                </div>
              )}

              <input
                type="number"
                name="amount"
                value={sendForm.amount}
                onChange={handleSendFormChange}
                placeholder="Amount"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="text"
                name="narration"
                value={sendForm.narration}
                onChange={handleSendFormChange}
                placeholder="Narration"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                onClick={handleContinue}
                className="w-full bg-[#0E1C3F] hover:bg-blue-800 text-white py-3 rounded-xl text-sm font-semibold transition-colors mt-2"
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
            <button
              onClick={() => setShowReceiveModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-lg font-semibold text-gray-800 text-center mb-8">Receive Money</h2>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-500">Bank Name</p>
                <p className="text-base font-semibold text-gray-800">Remit</p>
                <div className="border-b border-gray-100 mt-2" />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Name</p>
                    <p className="text-base font-semibold text-gray-800">Yusuf Mariam</p>
                  </div>
                  <button onClick={() => handleCopy("Yusuf Mariam", "accountName")} className="text-gray-400 hover:text-blue-600">
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

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Number</p>
                    <p className="text-base font-semibold text-gray-800">705055530</p>
                  </div>
                  <button onClick={() => handleCopy("705055530", "accountNumber")} className="text-gray-400 hover:text-blue-600">
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

              <button
                onClick={handleCopyAll}
                className="w-full bg-[#0E1C3F] hover:bg-blue-800 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
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
            <button
              onClick={() => setShowConvertModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-6">Convert Money</h2>

            <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{fromCurrency === "NGN" ? "🇳🇬" : "🇹🇿"}</span>
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

            <div className="flex justify-center -my-1 z-10 relative">
              <button
                onClick={handleSwapCurrency}
                className="w-10 h-10 bg-[#0E1C3F] rounded-full flex items-center justify-center hover:bg-blue-800 shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-4 mt-2 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{toCurrency === "TZS" ? "🇹🇿" : "🇳🇬"}</span>
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

            <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">Transaction details</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Conversion fee</p>
                  <p className="text-sm font-medium text-gray-800">₦{isNaN(conversionFee) ? "0.00" : conversionFee}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Total amount we'll convert</p>
                  <p className="text-sm font-medium text-gray-800">₦{isNaN(convertedAmount) ? "0.00" : convertedAmount}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Rate</p>
                  <p className="text-sm font-medium text-gray-800">{conversionRate}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const newTransaction = {
                  id: transactions.length + 1,
                  type: `Convert ${fromCurrency} to ${toCurrency}`,
                  icon: <IoWifi className="text-purple-500" size={20} />,
                  iconBg: "bg-purple-100",
                  date: new Date().toLocaleDateString("en-US", {
                    month: "long", day: "numeric", year: "numeric",
                  }),
                  amount: `₦${parseFloat(convertAmount).toLocaleString()}`,
                  status: "Completed",
                };
                setTransactions([newTransaction, ...transactions]);
                setShowConvertModal(false);
              }}
              className="w-full bg-[#0E1C3F] hover:bg-blue-800 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex-1 bg-gray-100 min-h-screen">

        {/* Top Row - Balance + Stats */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6 p-6">

          {/* Balance Card */}
          <div className="bg-[#0E1C3F] text-white rounded-2xl p-6 flex-1">
            <p className="text-sm text-blue-300 mb-1">Available Balance</p>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl lg:text-3xl font-bold">
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
                className="flex-1 bg-[#E7E8EC] hover:bg-gray-300 text-black py-2 rounded-full text-sm font-medium transition-colors"
              >
                Receive
              </button>
              <button
                onClick={() => setShowConvertModal(true)}
                className="flex-1 bg-[#E7E8EC] hover:bg-gray-300 text-black py-2 rounded-full text-sm font-medium transition-colors"
              >
                Convert
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-row gap-4">

            {/* Income */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200 flex-1 min-w-[160px]">
              <div className="flex items-center justify-between mb-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
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
            <div className="bg-white rounded-2xl p-4 border border-gray-200 flex-1 min-w-[160px]">
              <div className="flex items-center justify-between mb-2">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
        <div className="px-6 mb-6">
          <h3 className="text-base font-semibold text-gray-800 mb-4">Recipients</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
        <div className="px-6 pb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-800">
                Transaction History
              </h3>
              <a
                href="transaction"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
              >
                View full History

                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Table Header */}
            <div className="hidden sm:grid grid-cols-4 text-xs text-gray-400 pb-2 border-b border-gray-100 mb-2">
              <span>Transaction type</span>
              <span>Date</span>
              <span>Amount</span>
              <span>Status</span>
            </div>

            {/* ✅ FIXED - Transactions List using getStatusStyle and getStatusIcon */}
            <div className="flex flex-col divide-y divide-gray-50">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex flex-col sm:grid sm:grid-cols-4 items-start sm:items-center py-3 text-sm gap-2 sm:gap-0"
                >
                  {/* Type */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${tx.iconBg} flex items-center justify-center flex-shrink-0`}>
                      {tx.icon}
                    </div>
                    <span className="text-gray-700">{tx.type}</span>
                  </div>

                  {/* Date */}
                  <span className="text-gray-400 pl-11 sm:pl-0">{tx.date}</span>

                  {/* Amount */}
                  <span className="text-gray-700 font-medium pl-11 sm:pl-0">{tx.amount}</span>

                  {/* ✅ Status - using getStatusStyle(tx.status) and getStatusIcon(tx.status) */}
                  <div className="flex items-center justify-between w-full sm:w-auto pl-11 sm:pl-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusStyle(tx.status)}`}>
                      {getStatusIcon(tx.status)}
                      {tx.status}
                    </span>
                    <button className="text-xs text-gray-400 hover:text-gray-600 ml-4">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;