import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Disputes = () => {
  const navigate = useNavigate();
  const [issueCategory, setIssueCategory] = useState("");
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const issueCategories = [
    "Unauthorized Transaction",
    "Duplicate Transaction",
    "Wrong Amount Charged",
    "Transaction Not Received",
    "Merchant Issue",
    "Others",
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setAttachment(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setAttachment(file);
  };

  const handleSubmit = () => {
    if (!issueCategory || !description) {
      alert("Please fill in all required fields.");
      return;
    }
    alert("Dispute submitted successfully!");
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen px-10 py-8">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <span>Home</span>
        <span>&gt;</span>
        <span>Disputes</span>
        <span>&gt;</span>
        <span>Report an issue</span>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Report an Issue</h1>
      <p className="text-sm text-gray-400 mb-6">
        Provide details about the transaction issue you're experiencing. Our
        team will review your claim within 3-5 working days.
      </p>

      {/* Provide a reason label */}
      <h2 className="text-base font-semibold text-gray-700 mb-4">
        Provide a reason
      </h2>

      {/* Two Column Layout */}
      <div className="flex gap-6">

        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-4">

          {/* Issue Category Card */}
          <div className="bg-[#0E1C3F] rounded-2xl p-6">
            <p className="text-sm font-semibold text-white mb-4">
              Issue Category
            </p>

            {/* Category Input */}
            <div className="relative mb-5">
              <select
                value={issueCategory}
                onChange={(e) => setIssueCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-500 outline-none focus:ring-2 focus:ring-blue-400 appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Unauthorized Transaction
                </option>
                {issueCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Detailed Description */}
            <p className="text-sm text-blue-300 mb-2">Detailed Description</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explain what happened with this transaction..."
              rows={4}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>

          {/* Upload Attachment Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-gray-800 mb-1">
              Upload an attachment
            </p>
            <p className="text-xs text-gray-400 mb-4">
              Include screenshots, receipts, or any communication with the
              merchant to speed up the process.
            </p>

            {/* Drag & Drop */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput").click()}
              className={`border-2 border-dashed rounded-xl py-12 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                dragOver
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              <svg
                className="w-8 h-8 text-gray-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              {attachment ? (
                <p className="text-sm text-blue-600 font-medium">
                  {attachment.name}
                </p>
              ) : (
                <p className="text-xs text-blue-400">
                  PNG, JPG or PDF (max. 10MB)
                </p>
              )}
              <input
                id="fileInput"
                type="file"
                accept=".png,.jpg,.jpeg,.pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Transaction Summary */}
        <div className="w-80 flex flex-col gap-4">

          <h3 className="text-base font-semibold text-gray-800">
            Transaction Summary
          </h3>

          {/* Spotify Transaction */}
          <div className="bg-[#0E1C3F] rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white text-base">🎵</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Spotify P...</p>
                <p className="text-xs text-blue-300">March 20, 2026</p>
                <p className="text-xs text-blue-300">1:33 PM</p>
              </div>
            </div>
            <span className="text-sm font-semibold text-white">₦300</span>
          </div>

          {/* Amazon Transaction */}
          <div className="bg-[#0E1C3F] rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-yellow-600 flex items-center justify-center">
                <span className="text-white text-base">📦</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Amazon...</p>
                <p className="text-xs text-blue-300">March 5, 2026</p>
                <p className="text-xs text-blue-300">2:33 PM</p>
              </div>
            </div>
            <span className="text-sm font-semibold text-white">₦300</span>
          </div>

          {/* Dispute Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Total Dispute Amount</p>
              <p className="text-sm font-semibold text-gray-800">₦300</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Merchant</p>
              <p className="text-sm font-semibold text-gray-800">
                Spotify, Amazon
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Reference ID</p>
              <p className="text-sm font-semibold text-gray-800">
                RM-90210- XC
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-[#0E1C3F] rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
              <p className="text-xs text-blue-200 leading-relaxed">
                By submitting this dispute, you confirm that the information
                provided is accurate and truthful.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="px-10 py-2.5 border border-gray-300 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors bg-white"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-10 py-2.5 bg-[#0E1C3F] hover:bg-blue-800 text-white rounded-full text-sm font-medium transition-colors"
        >
          Submit Dispute
        </button>
      </div>
    </div>
  );
};

export default Disputes;