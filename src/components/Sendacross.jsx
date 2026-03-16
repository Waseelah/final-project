import React from 'react'

const Sendacross = () => {
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
      <div className="max-w-[1110px] mx-auto px-6 sm:px-10 py-10 sm:py-14">
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
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-[620px] h-[520px] sm:h-[600px]">
            {/* abstract africa-like shape */}
            <svg
              viewBox="0 0 500 600"
              className="absolute inset-0 w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M170 35
                   C110 60, 80 120, 105 185
                   C65 210, 55 290, 90 360
                   C120 420, 170 450, 220 460
                   C285 472, 335 520, 395 505
                   C445 492, 455 430, 450 360
                   C445 270, 410 220, 375 165
                   C345 115, 325 70, 260 40
                   C225 24, 195 24, 170 35Z"
                stroke="#8b8b8b"
                strokeWidth="2"
              />
            </svg>

            {/* yellow dots */}
            {dots.map((dot, index) => (
              <span
                key={index}
                className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#d9a300]"
                style={{ top: dot.top, left: dot.left }}
              />
            ))}
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

export default Sendacross