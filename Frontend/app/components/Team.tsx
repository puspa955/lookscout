import React from 'react'
import Image from 'next/image'
import morgan from '../../public/morgan.svg'
import jeff from '../../public/jeff.svg'
import and from '../../public/and.svg'
import twitter from '../../public/twitter.svg'
import fb from '../../public/fb.svg'
import link from '../../public/link.svg'
import mail from '../../public/mail.svg'

export default function Team() {
  return (
    <div className='text-gray-800 w-[375px] h-[1461px] md:w-[768px] md:h-[1039px] lg:w-[1440px] lg:h-[750px] flex items-center justify-center flex-col relative md:pb-16 pb-10 '>
        <h1 className='text-[26px] font-bold lg:text-[30px] '>
        The Core of Our Team 
       </h1>
        <p className='text-gray-500 text-[12px] lg:text-[16px] md:text-[16px] lg:mt-2 lg:mx-60 md:px-20 text-center px-4'>Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 mt-14 lg:px-16 md:px-8 px-6">
      
      
              <a className="group  flex flex-col gap-4">

                <Image height={500} width={500} src={morgan} loading="eager" alt="logo"/>                
                <div>
                  <h2 className="text-l font-semibold">
                    Morgan Drew
                  </h2>
                  <p className=" text-[16px] text-gray-500 gap-4">
                    Manager
                  </p>
                  <span className='flex flex-row gap-4 pt-2'>
                  <Image height={20} width={20} src={twitter} loading="eager" alt="logo"/>
                  <Image height={20} width={20} src={fb} loading="eager" alt="logo"/>
                  <Image height={20} width={20} src={link} loading="eager" alt="logo"/>
                  <Image height={20} width={20} src={mail} loading="eager" alt="logo"/>
                  </span>
                </div>
              </a>

               {/* Vertical Line */}
    

              <a
                className="group flex gap-4 flex-col"
               >

                <Image height={500} width={500} src={jeff} loading="eager" alt="logo" />                
                <div>
                  <h2 className=" text-l font-semibold">
                  Jeffery Walker
                    
                  </h2>
                  <p className=" text-[16px] text-gray-500 gap-4">
                    Lead Designer
                  </p>
                  <span className='flex flex-row gap-4 pt-2'>
                  <Image height={20} width={20} src={twitter} loading="eager" alt="logo"/>
                  <Image height={20} width={20} src={fb} loading="eager" alt="logo"/>
                  <Image height={20} width={20} src={link} loading="eager" alt="logo"/>
                  <Image height={20} width={20} src={mail} loading="eager" alt="logo"/>
                  </span>
                </div>
              </a>

           <a
                className="group rounded-lg flex flex-col gap-4 "
               >

                <Image height={500} width={500} src={and} loading="eager" alt="logo" />                
                <div>
                  <h2 className=" text-l font-semibold">
                    Andrew Steve                    
                  </h2>
                  <p className="text-[16px] text-gray-500 gap-4">
                  UI/UX Designer 
                 </p>
                 <span className='flex flex-row gap-4 pt-2'>
                  <Image height={20} width={20} src={twitter} loading="eager" alt="logo"/>
                  <Image height={20} width={20} src={fb} loading="eager" alt="logo"/>
                  <Image height={20} width={20} src={link} loading="eager" alt="logo"/>
                  <Image height={20} width={20} src={mail} loading="eager" alt="logo"/>
                  </span>
                </div>
              </a>

           
              </div>
    </div>
  )
}
