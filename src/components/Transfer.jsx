import React from 'react'
import { FaMoneyBillWave } from "react-icons/fa";
import { GoShieldLock } from 'react-icons/go';
import { IoPhonePortraitSharp } from "react-icons/io5";
export const Transfer = () => {
    const cards =
        [{
            title: "High fees",
            description: "Traditional money transfer are slow and hide their fees.",
            icon: <FaMoneyBillWave />
        },
        {
            title: "Slow transfers",
            description: "Transfers can take several days to arrive.",
            icon: <GoShieldLock />

        },
        {
            title: "Remit Difference",
            description: "Remit shows you exactly what you pay and what your family gets.",
            icon: <IoPhonePortraitSharp />
        }

        ]
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1320px] mx-auto rounded-[28px] border border-[#d9d9d9] bg-[#f6f6f6] px-6 sm:px-10 lg:px-14 py-10 sm:py-14 shadow-sm">
                {/* Heading */}
                <div className="max-w-[760px] mx-auto text-center">
                    <h4 className="text-[30px] sm:text-[42px] lg:text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#111111]">
                        Sending money across Africa
                        <br className="hidden sm:block" />
                        shouldn’t be expensive or confusing
                    </h4>
                </div>

                {/* Cards */}
                <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-3 gap-5 bg-[#f6f6f6]">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="rounded-[24px] border border-[#635151] bg-white px-6 py-7 h-[237px]  flex flex-col justify-start"
                        >
                            <div className="w-5 h-5 rounded-xl border border-[#f1dfaa] bg-white flex items-center justify-center text-[#d6a326] text-lg">
                                {card.icon}
                            </div>

                            <h3 className="mt-6 text-[20px] sm:text-[22px] font-semibold leading-tight text-[#111111]">
                                {card.title}
                            </h3>

                            <p className="mt-3 text-[16px] leading-[1.55] text-[#4b4b4b] max-w-[320px]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-8 rounded-[14px] bg-[#03133a] px-6 py-5 text-center">
                    <p className="text-[15px] sm:text-[17px] leading-relaxed text-white">
                        Select your currency and amount you want to send.{" "}
                        <span className="text-[#d4a72c] font-medium">
                            We support 15+ African currencies
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
};





export default Transfer