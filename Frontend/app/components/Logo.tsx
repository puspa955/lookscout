import React from 'react'
import Image from 'next/image'
import twilio from '../../public/twilio.svg'
import slack from '../../public/slack.svg'
import google from '../../public/google.svg'
import paypal from '../../public/paypal.svg'
import mailchimp from '../../public/mailchimp.svg'
import pinterest from '../../public/pinterest.svg'







function HomePage() {
  return (
    <div className='bg-[#2a62d9] z-10 w-[375px] h-[416px] lg:h-[160px] lg:w-[1440px] md:h-[176px] md:w-[768px] flex items-center justify-center md:flex-col flex-col lg:flex-row lg:gap-12 '>
       <span className='flex lg:flex-row md:flex-row flex-col  gap-5'>
                  <Image height={130} width={130} src={twilio} loading="eager" alt="logo"/>
                  <Image height={130} width={130} src={slack} loading="eager" alt="logo"/>
                  <Image height={130} width={130} src={google} loading="eager" alt="logo"/>
                  
                  <Image height={130} width={130} src={paypal} loading="eager" alt="logo"/>
                  </span>
                  <div className='flex md:flex-row flex-col gap-5 mt-5 lg:pb-6'>
                  <Image height={130} width={130} src={pinterest} loading="eager" alt="logo" />
                  <Image height={130} width={130} src={mailchimp} loading="eager" alt="logo"/>
                  </div>
                  
       

    </div>
  )
}

export default HomePage