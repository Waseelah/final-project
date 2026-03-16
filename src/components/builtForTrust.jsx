import React from "react";
import { IoEye } from "react-icons/io5"

const BuiltForTrust = () => {
  return (
    <div className="w-100vw ">
     <section class="bg-linear-to-b from-[#0f1f3d] to-[#1e40af] py-24">
  <div class="max-w-6xl mx-auto px-6 text-center">

    <h2 class="text-3xl md:text-4xl font-bold text-white">
      Built for Trust
    </h2>

    <p class="text-gray-300 mt-4 max-w-2xl mx-auto">
      Every feature is designed to give you complete control and
      visibility over your money
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

      <div class="bg-[#24365a] rounded-3xl p-8 text-left transition hover:-translate-y-1 hover:bg-[#2a4170]">
        <div class="w-10 h-10">
      <img src="document.png"></img>
        </div>
        <h3 class="text-white font-semibold text-lg mb-2">
          Real Exchange Rate
        </h3>
        <p class="text-gray-300 text-sm">
          Always see the true market exchange rate.
        </p>
      </div>

      <div class="bg-[#24365a] rounded-3xl p-8 text-left transition hover:-translate-y-1 hover:bg-[#2a4170]">
       <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-6">
        <IoEye />
        </div>
        <h3 class="text-white font-semibold text-lg mb-2">
          No Hidden Fees
        </h3>
        <p class="text-gray-300 text-sm">
          Full transparency before sending.
        </p>
      </div>

      <div class="bg-[#24365a] rounded-3xl p-8 text-left transition hover:-translate-y-1 hover:bg-[#2a4170]">
        <div class="w-10 h-10 ">
        <img src="location.png"></img>     
         </div>
        <h3 class="text-white font-semibold text-lg mb-2">
          Track Transfers in Real Time
        </h3>
        <p class="text-gray-300 text-sm">
          Follow your transaction status in real life.
        </p>
      </div>

      <div class="bg-[#24365a] rounded-3xl p-8 text-left transition hover:-translate-y-1 hover:bg-[#2a4170]">
        <div class="w-10 h-10 ">
          <img src="fast.png"></img>
        </div>
        <h3 class="text-white font-semibold text-lg mb-2">
          Fast Transfers
        </h3>
        <p class="text-gray-300 text-sm">
          Most transfers arrive within minutes.
        </p>
      </div>

      <div class="bg-[#24365a] rounded-3xl p-8 text-left transition hover:-translate-y-1 hover:bg-[#2a4170]">
        <div class="w-10 h-10 ">
          <img src="secure.png" alt=""></img>
        </div>
        <h3 class="text-white font-semibold text-lg mb-2">
          Secure Transactions
        </h3>
        <p class="text-gray-300 text-sm">
          Bank level encryption protects your money.
        </p>
      </div>

      <div class="bg-[#24365a] rounded-3xl p-8 text-left transition hover:-translate-y-1 hover:bg-[#2a4170]">
        <div class="w-10 h-10 ">
          <img src="support.png" alt="" ></img>
        </div>
        <h3 class="text-white font-semibold text-lg mb-2">
          24/7 Support
        </h3>
        <p class="text-gray-300 text-sm">
          Report issues and get assistance anytime.
        </p>
      </div>

    </div>

  </div>
</section>
    </div>
  );
};

export default BuiltForTrust;
