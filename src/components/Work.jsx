import React from 'react'

const Work = () => {
  return (
    <div>
      <section class="bg-[#0E1C3F] py-20 px-6">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-white text-4xl font-bold text-center mb-12">How It Works</h2>
            <div class="flex flex-col gap-[-] w-137.5 mx-40 ">
                <div class="bg-[#3d5086] border border-[#1e3060] rounded-2xl px-10 py-6 flex items-start gap-6  ">
                    <span class="text-[#F5A623] text-3xl font-bold">01</span>
                    <div>
                        <h3 class="text-white font-bold text-lg flex items-center gap-2">
                            <img src="uil_wallet.svg" alt="" /> Choose amount
                        </h3>
                        <p class="text-gray-400 mt-1">Enter how much money you want to send.</p>
                    </div>
                </div>

                <div class="bg-[#3d5086] border border-[#1e3060] rounded-2xl px-10 py-6 flex items-start gap-6 ">
                    <span class="text-[#F5A623] text-3xl font-bold">02</span>
                    <div>
                        <h3 class="text-white font-bold text-lg flex items-center gap-2">
                          <img src="Frame.svg" alt="" />   See exact fees
                        </h3>
                        <p class="text-gray-400 mt-1">Remit instantly shows exchange rates and total fees.</p>
                    </div>
                </div>

                <div class="bg-[#3d5086] border border-[#1e3060] rounded-2xl px-10 py-6 flex items-start gap-6 ">
                    <span class="text-[#F5A623] text-3xl font-bold">03</span>
                    <div>
                        <h3 class="text-white font-bold text-lg flex items-center gap-2">
                         <img src="Vector.svg" alt="" />    Send in minutes
                        </h3>
                        <p class="text-gray-400 mt-1">Confirm transfer and your recipient receives money quickly.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Work
