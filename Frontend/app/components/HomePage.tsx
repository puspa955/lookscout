import React from 'react'

function HomePage() {
  return (
    <div className='bg-slate-50 z-10 w-[375px] md:w-[768px] h-[440px] lg:h-[492px] lg:w-[1440px] flex items-center justify-center flex-col pt-20'>
       <span className='text-[14px] font-semibold text-blue-500'>
       1% of the INDUSTRY
       </span>
       <span className='text-gray-800 font-extrabold text-[38px] lg:text-[50px] md:text-[50px] mt-4 px-1 text-center leading-10  '>
        Hype got you here.<br />
        
       Stay for the support.
        </span>
        <p className='text-gray-500 text-[15px] text-center  mt-4 lg:w-[650px] md:w-[650px]  lg:px-1 md:px-2 px-6'>We&apos;ve been told it is possible to revolutionize the payment industry. We 
         have not reinvented the wheel, we decided to build upon it - successfully.</p>

    </div>
  )
}

export default HomePage