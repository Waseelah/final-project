import React from "react";

const FirstSection = () => {
  return (
    <div className="w-100vw h-128 overflow-inline bg-gray-100">
      <div className=" w-100vw flex justify-between mx-60 h-5">
        <div className="mt-20 w-125">
          <h1 className="text-[70px] font-bold text-[#141B34]  w-175 ">
            Send money <span className="text-[#0F0E0E]">Across Africa. </span>
            <span className="text-[#FFB700]"> Fast. Fair. Transparent. </span>
          </h1>
          <p className="font-inter text-[#444444] text-lg  ">
            Fast. Fair. Transparent. Join thousands of families sending support
            instantly with zero hidden fees.
          </p>
          <div className="flex gap-5 ">
            <button className="bg-[#FFB700] text-[#000000] px-6 py-3 rounded-lg mt-5 font-semibold">
              Start Sending
            </button>
            <button className="bg-[#FFFFFF] text-[#0F0E0E] px-6 py-3 rounded-lg mt-5 font-semibold border border-[#0F0E0E]">
              See How It Works
            </button>
          </div>

         <div class="flex gap-2 text-xs text-[#000000]-200 font-semibold mt-4">
        <span>Real Exchange Rate</span>
        <span>No Hidden Fees</span>
        <span>Transfer In Minutes</span>
      </div>
        </div>
        <div className="h-128 mt-20"> 
          <img
            src="remit.png"
            alt=""
            className="w-full h-100 object-cover mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
