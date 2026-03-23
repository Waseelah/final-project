// src/components/SendMoneyModal.jsx
import React, { useState } from "react";

const SendMoneyModal = ({ isOpen, onClose }) => {
  const [sendForm, setSendForm] = useState({
    bank: "",
    accountNumber: "",
    amount: "",
    narration: "",
  });

  const handleSendFormChange = (e) => {
    setSendForm({ ...sendForm, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    if (!sendForm.bank || !sendForm.accountNumber || !sendForm.amount) {
      alert("Please fill in all required fields.");
      return;
    }
    alert(`Sending ₦${sendForm.amount} to account ${sendForm.accountNumber}`);
    onClose();
    setSendForm({ bank: "", accountNumber: "", amount: "", narration: "" });
  };

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
    >
      {/* Overlay - click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 z-10">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-6">
          Send Money
        </h2>

        {/* Form */}
        <div className="flex flex-col gap-4">

          {/* Bank Selector */}
          <div className="relative">
            <select
              name="bank"
              value={sendForm.bank}
              onChange={handleSendFormChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-500 outline-none focus:ring-2 focus:ring-blue-400 appearance-none bg-white cursor-pointer"
            >
              <option value="" disabled>Bank</option>
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
            {/* Arrow Icon */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
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
                  d="M9 5l7 7-7 7"
                />
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
  );
};

export default SendMoneyModal;