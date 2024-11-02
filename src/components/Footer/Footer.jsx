import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Footerlogo from '../../assets/footerlogo.png'
import Cart1 from '../../assets/cart1.png'
import Cart2 from '../../assets/cart2.png'

const Footer = () => {
  return (
    <>
      <footer className="py-[150px] bg-[#1F1F1F]">
        <div className="container max-w-[1140px]">
          <div className="flex">
            <div className="w-[40%]">
              <div className="mb-8">
                <img src={Footerlogo} alt="" />
              </div>
              <div className="mb-4 text-white flex items-center">
                <MdOutlineMarkEmailUnread className="text-xl me-2" />
                <p className="text-sm font-normal">mail@yourcompany.com</p>
              </div>
              <div className="mb-4 text-white flex items-center">
                <FiPhoneCall className="text-xl me-2" />
                <p className="text-sm font-normal">+896 120 5889 (Toll free)</p>
              </div>
              <div className="mb-4 text-white flex items-center">
                <GrMapLocation className="text-xl me-2" />
                <p className="text-sm">
                  101 Baker Street, New York, USA, 12345
                </p>
              </div>
              <div className="mt-9">
                <div className="text-white flex gap-[16px] text-xl">
                  <div className="bg-primary rounded-full p-[10px]">
                    <FaFacebookF className=" text-[18px] text-white  " />
                  </div>
                  <div className="bg-primary rounded-full p-[10px]">
                    <FaTwitter className=" text-[18px] text-white  " />
                  </div>
                  <div className="bg-primary rounded-full p-[10px]">
                    <FaLinkedinIn className=" text-[18px] text-white  " />
                  </div>
                  <div className="bg-primary rounded-full p-[10px]">
                    <FaInstagram className=" text-[18px] text-white  " />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[20%] mt-9 text-white">
              <ul>
                <li className="mb-5">
                  <a href="#" className="font-bold cursor-default">
                    Company
                  </a>
                </li>
                <li className="mb-3 text-sm hover:text-primary">
                  <a href="#">Home</a>
                </li>
                <li className="mb-3 text-sm hover:text-primary">
                  <a href="#">About</a>
                </li>
                <li className="mb-3 text-sm hover:text-primary">
                  <a href="#">Services</a>
                </li>
                <li className="mb-3 text-sm hover:text-primary">
                  <a href="#">Gallery</a>
                </li>
              </ul>
            </div>
            <div className="w-[20%] mt-9 text-white">
              <ul>
                <li className="mb-5">
                  <a href="#" className="font-bold cursor-default">
                    Others
                  </a>
                </li>
                <li className="mb-3 text-sm hover:text-primary">
                  <a href="#">Blog</a>
                </li>
                <li className="mb-3 text-sm hover:text-primary">
                  <a href="#">Contact</a>
                </li>
                <li className="mb-3 text-sm hover:text-primary">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="mb-3 text-sm hover:text-primary">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="w-[20%] mt-9 text-white">
              <h5 className='text-base font-bold mb-5'>Certificate</h5>
              <div className='flex gap-2'>
                <img src={Cart1} alt="" />                
                <img src={Cart2} alt="" />                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer