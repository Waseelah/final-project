import React from "react";

const Second = () => {
  return (
    <div>
      <section class="bg-gray-100 ">
        <div class="max-w-270 mx-auto px-6 text-center py-50">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 w-160 mx-auto leading-snug">
            Sending money across Africa shouldn’t be expensive or confusing
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 ">
            <div class="bg-white rounded-3xl shadow-sm p-6 text-left ">
              <div class="w-8 h-8 rounded-md flex items-center justify-center mb-4">
             <img src="document.png" alt=""className="" />
              </div>

              <h3 class="font-bold text-gray-900 mb-2">High Fees</h3>

              <p class="text-sm text-[#0F0E0E]-500">
                Traditional transfers are slow and hide their fees.
              </p>
            </div>

            <div class="bg-white rounded-3xl shadow-sm p-6 text-left ">
              <div class="w-8 h-8  rounded-md flex items-center justify-center mb-4">
                <img src="result.png" alt="" />
              </div>

              <h3 class="font-bold text-gray-900 mb-2">Slow Transfers</h3>

              <p class="text-sm text-gray-500">
                Transfers can take several days to arrive.
              </p>
            </div>

            <div class="bg-white rounded-3xl shadow-sm p-6 text-left ">
              <div class="w-8 h-8 rounded-md flex items-center justify-center mb-4">
                <img src="last.png" alt="" />
              </div>

              <h3 class="font-bold text-gray-900 mb-2">Remit Difference</h3>

              <p class="text-sm text-gray-500">
                Remit shows you exactly what you pay and what your family gets.
              </p>
            </div>
          </div>

          <div class="bg-[#132042] text-white rounded-lg mt-12 py-4 text-sm">
            Select your currency and amount you want to send.
            <span class="text-yellow-400 font-medium">
              We support 15+ African currencies
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Second;
