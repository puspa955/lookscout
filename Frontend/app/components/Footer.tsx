import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../public/Lookscout.svg"
import footer from "../../public/footer.svg"
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <div className=" lg:h-[400px] lg:w-[1440px] md:w-[768px] md:h-[550px] w-[375px] h-[748px] flex lg:flex-row flex-col gap-14 lg:gap-36">
        <div className="lg:ml-16 lg:mt-16 px-6 pt-8">
          <ul>
            <p className="text-gray-800 font-bold text-3xl">
            <Link href='/'>
            <Image src={LogoImage} alt="Logo" width={160} height={160} />
            </Link>
            </p>
            <p className="text-gray-500 text-[16px] pt-4">
            Generate outside the box thinking <br /> with the possibility to targtet the low.
            </p>
            <div className="flex gap-6 text-black pt-4">
              <FaInstagram className="text-xl cursor-pointer " />
              <FaTwitter className="text-xl cursor-pointer " />
              <FaLinkedin className="text-xl cursor-pointer " />
              <FaFacebook className="text-xl cursor-pointer " />
            </div>
          </ul>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 px-6 gap-6 items-center">
        <div className=" text-[18px]">
          <ul>
            <p className="text-gray-800 font-bold text-[18px]">Products</p>
            <li className="text-gray-500 pt-4 font-sm hover:text-blue-600 cursor-pointer">
              Formats
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Solution
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Integration
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Feature
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Enterprise
            </li>
          </ul>
        </div>
        <div className="text-[18px]">
          <ul>
            <p className="text-gray-800 font-bold">Resources</p>
            <li className="text-gray-500 pt-4 font-sm hover:text-blue-600 cursor-pointer">
              Partners
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Community
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Developers
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              App
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Blog
            </li>
          </ul>
        </div>
        <div className="text-[18px] lg:pb-8 md:pb-8">
          <ul>
            <p className="text-gray-800 font-bold">Why Choose Us?</p>
            <li className="text-gray-500 pt-4 font-sm hover:text-blue-600 cursor-pointer">
              Channels
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Scale
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Watch the Demo
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Our Competition
            </li>
            
          </ul>
        </div>
        <div className="text-[18px] lg:pb-8 lg:pl-8 md:pl-8 md:pb-8">
          <ul>
            <p className="text-gray-800 font-bold">Company</p>
            <li className="text-gray-500 pt-4 font-sm hover:text-blue-600 cursor-pointer">
              About US
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              News
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Leadership
            </li>
            <li className="text-gray-500 pt-2 font-sm hover:text-blue-600 cursor-pointer">
              Media Kit
            </li>
            
          </ul>
        </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center relative bottom-2 lg:bottom-8">
        <Image src={footer} alt='footer'width={50} height={50} />
        <h1 className=" text-gray-500 text-sm font-sm pt-2">
          © 2023 Lookscout. All rights reserved.
          
        </h1>
      </div>
    </>
  );
}

export default Footer;
