import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-black border-b-[2px] border-b-[#FFB800]"> 
        <div className="container max-w-[1140px]">
          <div className="md:flex ms-8 py-5 md:py-0">
            <div className="md:flex gap-[50px] md:w-1/2">
              <div className="md:py-4 text-white flex items-center relative after:absolute after:content-[''] after:w-[1px] after:h-[20px] after:bg-white after:top-[18px] after:right-[-24px]">
                <MdOutlineMarkEmailUnread className="text-xl me-1" />
                <p>mail@yourcompany.com</p>
              </div>
              <div className="py-4 text-white flex items-center">
                <FiPhoneCall className="text-xl me-1" />
                <p>+896 120 5889 (Toll free)</p>
              </div>
            </div>
            <div className="md:w-1/2 md:flex justify-end items-center">
              <div className="text-white flex gap-[16px] md:text-xl">
                <FaFacebookF className='hover:text-primary' />
                <FaTwitter className='hover:text-primary' />
                <FaLinkedinIn className='hover:text-primary' />
                <FaInstagram className='hover:text-primary' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header