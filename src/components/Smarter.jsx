import React from 'react'

const Smarter = () => {
  return (
    <div>
    <section class="py-24 bg-gray-100">
  <div class="max-w-6xl mx-auto px-6">

    <div class="bg-[#0E1C3F] rounded-[40px] px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-16">

      <div class="w-120 text-left ">

        <h2 class="text-xl font-bold-700 text-white leading-tight">
          Start sending money the 
          <span class="text-[#FFB700]"> smarter way</span>
        </h2>

        <p class="text-gray-300 mt-6 text-lg">
          Join thousand of 
          <span class=""> Africans sending money </span> 
          quickly and transparently with Remit
        </p>

        <button class="mt-8 bg-[#FFB700] hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl shadow">
          Start Sending
        </button>

      </div>

      <div class="flex justify-center">
        <div class="bg-gray-100 rounded-3xl p-6">
          <img
            src="Frame 247.svg"
            alt="mobile app"
            class="w-70 object-contain"
          />
        </div>
      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default Smarter
