"use client"
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';
import axios from 'axios';

export default function Team() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [agreed, setAgreed] = useState(false); // State for checkbox
  const [Values, setValues] = useState({
    name:'',
    number:'',
    email:'',
    message:'',
  });

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name,value}=e.target;
    setValues({ ...Values,[name]:value});
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleAgreeChange = (isChecked: boolean) => {
    setAgreed(isChecked);
  };

  const submit = async() => {
    if (Values.name === '' || Values.number === '' || Values.email === '' || Values.message === '' )
     {
      alert("All fields are required");
     }
     else{
      await axios.post("https://lookscout-iota.vercel.app/api/v1/post",Values).then((res) => {
        alert(res.data.message);
      });
      setValues(
        {
          name:'',
          number:'',
          email:'',
          message:'',
        }
      )
     }
  }

 

  return (
    <div className='text-white bg-[#151B28] lg:w-[1440px] lg:h-[833px] md:w-[768px] md:h-[833px] w-[375px] h-[903px] flex items-center justify-center flex-col pt-8 '>
      <h1 className='text-[30px] font-bold '>
        Get In Touch With Us       
      </h1>
      <p className='text-gray-400 text-[16px] mt-2 lg:mx-60 px-8 lg:w-[700px] text-center'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
      </p>

      <div className='text-white border shadow-md rounded-md border-transparent flex flex-col lg:px-8 lg:py-8 px- py-8  bg-[#1C2534]  lg:w-[1216px] lg:h-[553px] md:w-[704px] md:h-[553px] mt-8 text-[14px]'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-2 px-2 md:px-6'>
          <div>
            <h5>First Name</h5>
            <input
             type="text"
             placeholder='Enter your name'
             name='name'
             value={Values.name}
             onChange={change}
             className='text-white lg:w-[500px] lg:h-[46px] md:w-[308px] w-[332px] h-[46px] mt-1 px-2 outline-none rounded-md  bg-[#2E3545]'
             />
            <h5 className='mt-4'>Phone Number</h5>
            <input
             type="text" 
             placeholder='Enter your phone number' 
             name='number'
             value={Values.number}
             onChange={change} 
             className='text-white  lg:w-[500px] lg:h-[46px] md:w-[308px] w-[332px] h-[46px] mt-1 outline-none rounded-md px-2 bg-[#2E3545]'
             />
          </div>
          <div>
            <h5>Email address</h5>
            <input type="text" 
             placeholder='Enter your email' 
             name='email'
             value={Values.email}
             onChange={change} 
             className='text-white  lg:w-[500px] lg:h-[46px] md:w-[308px] w-[332px] h-[46px] outline-none rounded-md px-2 mt-1 bg-[#2E3545]'/>
            <h5 className='mt-4'>Get In Touch With Us</h5>
            <h5 className='flex flex-row items-center justify-between text-gray-400 border lg:w-[500px] lg:h-[46px] md:w-[308px] w-[332px] h-[46px] bg-[#2E3545] border-none rounded-md mt-1 px-2 py-2' onClick={handleDropdown}>
              Dropdown <RiArrowDropDownLine  size={28} />
              <ul className={`absolute ${dropdownOpen ? 'block' : 'hidden'} bg-[#2E3545] text-white p-4 mt-28 shadow-md`}>
                <li>
                  <Link href='/service1'>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href='/service2'>Instagram</Link>
                </li>
                {/* Add more dropdown items as needed */}
              </ul>
            </h5>
          </div>
        </div>
        <div className='px-2 md:px-6'>
        <h5 className='mt-4'>Message</h5>
        <textarea 
         placeholder='Hi! We are Lookscout...' 
         name='message'
         value={Values.message}
         onChange={change} 
         className='text-white mt-1 px-2 lg:w-[1050px] lg:h-[147px] md:w-[640px] md:h-[147px] w-[332px] h-[145px] outline-none rounded-md pt-2 bg-[#2E3545]'/>

        {/* Agree to terms checkbox */}
        <div className="flex items-center mt-4">
          <input
           type="checkbox" 
           checked={agreed} 
           onChange={(e) => handleAgreeChange(e.target.checked)} 
           className="h-4 w-3 text-gray-700 border-gray-300 rounded-md" 
           />
          <span className="ml-2 text-white">I agree to the terms and conditions</span>
        </div>

        {/* Submit button */}
        <button onClick={submit} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mt-4 w-16 h-8">
          Submit
        </button>
        </div>
      </div>
    </div>
  )
}
