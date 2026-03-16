import React from 'react'
import { FaMoneyBillWave } from "react-icons/fa";
import { GoShieldLock } from 'react-icons/go';
import { IoPhonePortraitSharp } from "react-icons/io5";


const Work= ( ) => {
    const steps = [{
        number:"01",
        title:"Choose amount",
        description:"Enter how much money you want to send.",
        icon:<FaMoneyBillWave />
    },
    {
        number:"02",
        title:"See Exact fees",
    description:"Remit instantly shows exchange rates and total fees.",
icon:<GoShieldLock /> },
{
    number:"03",
    title:"Send in minutes",
    description:"Confrim Transfer and your recipient receives money quickly.",
    icon:<IoPhonePortraitSharp />
},]
  return (
    <section className="w-full bg-[#03133a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-white text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em]">
          How It Works
        </h2>

        <div className="mt-10 max-w-[430px] mx-auto rounded-[18px] bg-[#274d8b]/80 border border-white/10 overflow-hidden shadow-lg gap-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex gap-10 px-5 py-5 border-8 ${
                index !== steps.length - 1
                    ? "border-b-3 border-white/50 rounded-[18px]"
                    : ""
              }`} 
            >
              {/* Number */}
              <div className="shrink-0 text-[#f4b400] text-[26px] sm:text-[30px] font-semibold leading-none pt-1">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-[#f4b400]">
                  {step.icon}
                  <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-2 text-white/90 text-[14px] sm:text-[15px] leading-[1.45] max-w-[260px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  


export default Work;