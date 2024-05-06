"use client"
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import LogoImage from '../../public/Lookscout.svg';
import Link from 'next/link';
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar: React.FC = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex lg:flex-row flex-col  border-b items-center  w-[375px] md:w-[768px] lg:w-[1440px] lg:px-28   py-2  text-black text-[16px] text-bold font-semibold bg-slate-50">
      <div className='flex items-center '>
      <Link href='/'>
        <Image src={LogoImage} alt="Logo" width={160} height={160} className=' md:mr-48 lg:mr-8' />
      </Link>
      
      {/* Menu Icon (Visible on Medium and Small Screens) */}
      <div className="lg:hidden md:ml-60 ml-20" onClick={toggleNav}>
        {navVisible ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      </div>
      
      
      {/* Navbar Links (Visible on Large Screens) */}
      <ul className={`lg:flex lg:items-center ${navVisible ? 'flex flex-col' : 'hidden'}`}>
        <li className="  p-2 hover:text-blue-500">
          <Link href=''>Home</Link>
        </li>
        <li className="lg:p-4 p-2 hover:text-blue-500">
          <Link href='/#about'>Our Products</Link>
        </li>
        <li className='flex flex-row items-center p-2 justify-between text-black hover:text-blue-500' onClick={handleDropdown}>
              Resources <RiArrowDropDownLine  size={28} />
              <ul className={`absolute ${dropdownOpen ? 'block' : 'hidden'}  text-black px-8 mt-24 bg-white shadow-md`}>
                <li className='mt-2 hover:text-blue-500'>
                  <Link href='/service1'>
                    Resource 1
                  </Link>
                </li>
                <li className='my-2 hover:text-blue-500'>
                  <Link href='/service2'>Resource 2</Link>
                </li>
                {/* Add more dropdown items as needed */}
              </ul>
            </li>
        <li className="lg:p-4 p-2 hover:text-blue-500">
          <Link href='/components/Contact'>Contacts</Link>
        </li>
        <li className="lg:ml-56 p-2 text-[#427ef6] hover:text-blue-500">
          <Link href=''>Sign Up</Link>
        </li>
        <li className="lg:p-4 p-2 hover:text-blue-500">
          <button className="bg-[#427ef6] text-white font-semibold px-3 py-2 rounded-md mr-2">Log In</button>
        </li>
      </ul>
      
      </div>
    
  );
};

export default Navbar;
