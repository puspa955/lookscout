import React from 'react'
import Image from 'next/image'
import easy from '../../public/easy.svg'
import fast from '../../public/fast.svg'
import stream from '../../public/stream.svg'

export default function Message() {
  return (
    <div className='text-gray-800 w-full h-[1200px] md:h-[900px] lg:h-[454px] flex items-center justify-center flex-col md:px-1 relative md:pb-36 lg:pb-1 pb-44 '>
        <h1 className='lg:text[30px] text-[24px] font-bold '>
            Messaging for all
        </h1>
        <p className='text-gray-500 lg:text-[16px] md:text-[16px] text-[13px] mt-2 text-center'>User generated content in real-time will have multiple touchpoints for offshoring.</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-9 mt-14 lg:px-16 px-4">
      
      
              <a className="group  flex flex-col gap-4">

                <Image height={50} width={50} src={easy} loading="eager" alt="logo"/>                
                <div>
                  <h2 className="mb-3 text-l font-semibold">
                  Easier Work Organization                    
                  </h2>
                  <p className=" text-[16px] text-gray-500">
                  Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.</p>
                </div>
              </a>

               {/* Vertical Line */}
    

              <a
                className="group flex gap-4 flex-col"
               >

                <Image height={50} width={50} src={fast} loading="eager" alt="logo" />                
                <div>
                  <h2 className="mb-3 text-l font-semibold">
                  Fast Connection
                    
                  </h2>
                  <p className=" text-[16px] text-gray-500">
                  Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.                   </p>
                </div>
              </a>

           <a
                className="group rounded-lg flex flex-col gap-4 "
               >

                <Image height={50} width={50} src={stream} loading="eager" alt="logo" />                
                <div>
                  <h2 className=" text-l font-semibold">
                  Streamlined Processes
                    
                  </h2>
                  <p className="text-[16px] text-gray-500 gap-4">
                  Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.                  </p>
                </div>
              </a>

           
              </div>
    </div>
  )
}
