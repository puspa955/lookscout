import React from 'react'
import Image from 'next/image'
import photo from '../../public/Photo.svg';
import mediumphoto from '../../public/mediumphoto.svg'
import { FaCheck } from "react-icons/fa6";
import Link from 'next/link';
import { FiArrowRight } from "react-icons/fi";


export default function Check() {
  return (
    <div className='text-gray-800 w-[375px] h-[741px] lg:h-[688px] md:h-[874px] md:w-[768px] lg:w-[1440px]   flex items-center justify-center flex-col relative md:pb-60 pb-60  '>
    <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-28 md:gap-10 lg:mt-60  lg:px-12">
      
      
              <div className="group  flex flex-col gap-4 justify-center px-6">

                               
                
                  <h2 className=" text-[30px] font-semibold">
                  Demonstrate branding consequently think outside                  
                  </h2>
                  <p className=" text-[16px] text-gray-500">
                  Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.                
                    </p>
                    <p className='flex flex-row items-center gap-2 text-[16px] text-gray-500'>
                        <FaCheck className='text-blue-500' />Enterprise-grade security<br />
                    </p>
                    <p className='flex flex-row items-center gap-2 text-[16px] text-gray-500'>
                        <FaCheck className='text-blue-500' />99.9% guaranteed uptime SLA
                    </p>
                    <p className='flex flex-row items-center gap-2 text-[16px] text-gray-500'>
                        <FaCheck className='text-blue-500' />Designated customer success team
                    </p>
                    <div>
                    <button className='flex items-center justify-center mt-2 cursor-pointer bg-blue-500 text-white rounded-md px-3 py-2 hover:bg-blue-600'>
                        <Link href="/auth">
                    <span className="flex text-[16px]">
                    Start now
                    <span className="text-[20px] pl-1 flex  items-center"><FiArrowRight /></span>
                    </span>
                </Link>
                </button>
                </div>
              </div>

              <div className="group flex gap-4 flex-col">
              {/* Large screen size */}
              <div className="md:hidden hidden lg:block">
              <Image height={600} width={500} src={photo} loading="eager" alt="logo" />
                </div>
              {/* Medium screen size */}
              <div className="lg:hidden hidden md:block md:px-6">
                <Image height={400} width={730} src={mediumphoto} loading="eager" alt="logo"  />
              </div>

              {/* Small screen size */}
              <div className="lg:hidden md:hidden sm:block mt-4 px-6">
                <Image height={200} width={330} src={photo} loading="eager" alt="logo" />
              </div>
            </div>
              </div>
              </div>
              
  )
}
