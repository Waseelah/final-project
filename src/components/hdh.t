import React from 'react'

const FirstSection = () => {
  return (
    <div className='w-100vw'>
       <div className=" w-100vw flex ">
         <div className='mt-20 w-[500px]'>
            <h1 className='text-5xl font-bold text-[#141B34]'>
                Send money <span className="text-[#0F0E0E]" >Across Africa. </span><span className='text-[#FFB700]'> Fast. Fair. Transparent. </span>
            </h1>
            <p className='font-inter text-[#444444] text-lg mt-5'>
                Fast. Fair. Transparent. Join thousands of families sending support instantly with zero hidden fees.
            </p>
<div className="flex gap-5 ">
            <button className='bg-[#FFB700] text-[#000000] px-6 py-3 rounded-lg mt-5 font-semibold'>Start Sending</button>
            <button className='bg-[#FFFFFF] text-[#0F0E0E] px-6 py-3 rounded-lg mt-5 font-semibold border border-[#0F0E0E]'>See How It Works</button>
            </div>
        </div>
        <div className="">
            <img src="phone.png" alt="" className='w-full h-[400px] object-cover mt-10' />
        </div>
       </div>
    </div>
  )
}

export default FirstSection
