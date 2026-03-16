import React from 'react'
import profileimg from '../assets/profile1.png';
import profile from '../assets/profile2.png';
import shigo from '../assets/shigo.png';

const voices = () => {
    const testimonials = [{
        quote: "Remit changed how i support my parents in Lagos. It's faster than any bank i have used.",
        name: "Adewale K",
        route: "Lagos via Uganda",
        avatar: profileimg,
    }, {
        quote: "The tracking feature gives me such peace of mind.",
        name: "Sarah M",
        route: "Kenya via Tanzania",
        avatar: profile,
    }, {
        quote: "I was skeptical about the rates being low",
        name: "Kofi B",
        route: "Accra via Senegal",
        avatar: profileimg,
    },]
    return (
        <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1150px] mx-auto">
                {/* heading */}
                <div className="text-center max-w-[820px] mx-auto">
                    <h2 className="text-[#111111] text-[30px] sm:text-[30px] lg:text-[40px] font-semibold tracking-[-0.03em] leading-[1.02]">
                        Voice of the Diaspora
                    </h2>

                    <p className="mt-6 text-[#2f2f2f] text-[10px] sm:text-[14px] leading-[1.45] max-w-[650px] font-semibold mx-auto">
                        See how Remit is helping families stay connected and <br />support each
                        other across borders.
                    </p>
                </div>

                {/* cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
                    {testimonials.map((item, index) => (
                        <div key={index} className="flex flex-col justify-between border rounded-[18px] ">
                            <div className='mb-6'>
                                <img src="{shigo}" alt="logo" className='w-[30px] h-auto ' />

                            </div>
                            {/* quote */}
                            <div className="px-2">
                                <p className="text-[#111111] italic text-[19px] sm:text-[20px] leading-[1.2] tracking-[-0.02em]">
                                    “{item.quote}”
                                </p>
                            </div>

                            {/* profile strip */}
                            <div className="mt-10 rounded-[10px] bg-[#d8a400] px-4 py-4 flex items-center gap-4 min-h-[84px]">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover "
                                />

                                <div>
                                    <h3 className="text-black text-[15px] sm:text-[20px] font-bold leading-none">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1 text-black/85 text-[14px] sm:text-[17px] leading-none">
                                        {item.route}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );



}

export default voices