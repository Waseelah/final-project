import React from 'react'

const SendAcross = () => {
     const countries = [
    "Nigeria",
    "Ghana",
    "Kenya",
    "South Africa",
    "Uganda",
    "Tanzania",
    "Senegal",
  ];

  const dots = [
    { top: "18%", left: "38%" },
    { top: "28%", left: "32%" },
    { top: "38%", left: "52%" },
    { top: "46%", left: "31%" },
    { top: "47%", left: "60%" },
    { top: "56%", left: "29%" },
    { top: "59%", left: "47%" },
    { top: "61%", left: "66%" },
    { top: "68%", left: "34%" },
    { top: "50%", left: "44%" },
    { top: "60%", left: "59%" },
    { top: "50%", left: "69%" },
  ];

  return  (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-277.5 mx-auto px-6 sm:px-10 py-10 sm:py-14">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[#1f2937] text-[20px] sm:text-[46px] font-bold tracking-[-0.02em]">
            Send Money Across Africa
          </h2>

          <p className="mt-3 text-[#1f2937] text-[16px] sm:text-[18px] font-semibold">
            Available across multiple African Countries
          </p>
        </div>

        {/* Map area */}
        <div className="mt-12 flex justify-center h-200    ">
          <div className="relative   h-130 sm:h-150">
           <img src="Frame 225.svg" alt="map" />
          </div>
        </div>

        {/* Countries pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {countries.map((country, index) => (
            <button
              key={index}
              className="px-5 py-2 rounded-full border border-[#d9d9d9] bg-white text-[#6b7280] text-[10px] font-semibold sm:text-[10px] hover:bg-[#f9fafb] transition"
            >
              {country}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SendAcross