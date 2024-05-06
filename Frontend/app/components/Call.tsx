import React from 'react'
import Link from 'next/link'

function Call() {
  return (
    <div className='bg-[#2a62d9] border-b border-blue-500 z-10 w-[375px] h-[362px] lg:w-[1440px] lg:h-[318px] md:w-[768px] md:h-[270px] flex items-center justify-center flex-col '>
       <span className='text-[15px] font-semibold text-white'>
       1% of the INDUSTRY
       </span>
       <span className='text-white font-bold text-[30px] mt-4 text-center leading-8'>
       Welcome to your new digital reality that <br />
      which will rock your world truly at all.
        </span>
        <div className='mt-6 mb-9 text-[#427ef6] hover:text-blue-500'>
        <button className="bg-white text-blue-500 font-semibold px-3 py-2 rounded-md mr-2 text-[16px]">
            <Link href=''>
           Sign Up
           </Link>
          </button>
          <button className="bg-[#427ef6] text-white font-semibold px-3 py-2 rounded-md mr-2 text-[16px]">Log In</button>
          </div>

    </div>
  )
}

export default Call