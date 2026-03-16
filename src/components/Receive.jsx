import React from "react";

const Receive = () => {
  return (
    <div>
      <section class="bg-gray-100 py-24">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Know exactly what your family will receive.
          </h2>

          <div class="bg-white rounded-3xl shadow-lg p-10 max-w-xl mx-auto text-left h-100 w-120">
            <p class="text-gray-400 text-sm mb-1 font-bold">Send Amount</p>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">5000 TZS</h3>

            <input
              type="range"
              min="20"
              max="2000"
              class="w-full accent-yellow-500 mb-2"
            />

            <div class="flex justify-between text-xs text-gray-400 mb-6">
              <span>20TZS</span>
              <span>2000TZS</span>
            </div>

            <div class="flex justify-between text-sm text-gray-400 mb-2 font-bold">
              <span>Exchange</span>
              <span class="font-medium text-gray-900">1 TSN = 0.0045 NGN</span>
            </div>

            <div class="flex justify-between text-sm text-gray-400 mb-6 font-bold">
              <span>Transfer Fee</span>
              <span class="font-medium text-gray-900">500TZS</span>
            </div>

            <hr class="my-6"></hr>
              <p class="text-center text-xs text-gray-600 tracking-wider mb-4">
                RECEIVER GETS
              </p>
        
            <div class="text-center text-4xl font-bold">
              <span class="text-yellow-500">₦222,</span>
              <span class="text-gray-900">750</span>
              <span class="text-gray-400">.00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Receive;
