import React, { useState } from "react";

const Profile = () => {
  const [step, setStep] = useState(1);

  const steps = ["Personal Info", "Identity", "Bank Link", "Security"];

  return (
    <div className="grid grid-cols-3 gap-6">

      {/* LEFT SIDE */}
      <div className="col-span-2 space-y-6">

        {/* Header breadcrumb */}
        <div>
          <p className="text-sm text-gray-400">Home &gt; <span> Profile </span> </p>
          <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>
        </div>

        {/* Step Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-gray-800 mb-1">
            Complete your profile
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            To ensure secure and fast transfers, please provide your legal identification details.
          </p>

          <div className="flex items-center justify-between relative">
            <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-200"></div>

            {steps.map((label, index) => {
              const current = index + 1;

              return (
                <div key={index} className="flex flex-col items-center flex-1 z-10">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                      current <= step
                        ? "bg-[#1a2d5a] text-white border-[#1a2d5a]"
                        : "bg-white text-gray-400 border-gray-300"
                    }`}
                  >
                    {current}
                  </div>

                  <span className="text-xs mt-2 text-gray-600">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Identity Section */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-gray-800 mb-2">
            Identity Verification
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Upload a clear photo of your government-issued ID.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer">
              <p className="text-sm font-medium text-gray-700">
                Upload Front Side
              </p>
              <p className="text-xs text-gray-400">
                JPEG, PNG or PDF (Max 5MB)
              </p>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer">
              <p className="text-sm font-medium text-gray-700">
                Upload Back Side
              </p>
              <p className="text-xs text-gray-400">
                JPEG, PNG or PDF (Max 5MB)
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100">
                <a href="PinSetup">
              Continue to PIN Setup
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white rounded-xl shadow p-6 h-fit">
        <h3 className="font-semibold text-gray-800 mb-4">
          Personal Information
        </h3>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2d5a]"
          />

          <input
            type="text"
            placeholder="Date of Birth"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2d5a]"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2d5a]"
          />

          <input
            type="text"
            placeholder="Residential Address"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2d5a]"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;