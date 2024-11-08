import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
      <nav
        className={`${
          dropdown ? "max-h-[1000px] " : "max-h-[75px]"
        } bg-primary py-[20px] px-5 md:px-0 md:max-h-full transition-all duration-700 ease-in-out`}
      >
        <div className="container max-w-[1140px]">
          <div className="md:flex items-center justify-between ">
            <div className="md:w-[35%] cursor-pointer flex md:block justify-between items-center mb-5 md:mb-0">
              <img className="md:w-[60%] w-[40%]" src={Logo} alt="logo" />
              <CgMenuRight
                onClick={() => setDropdown(!dropdown)}
                className="text-white text-[30px] md:hidden"
              />
            </div>
            <div
              className={`${
                dropdown ? "left-0 opacity-100" : "left-[-100%] opacity-0"
              } md:opacity-100 md:static md:block transition-all duration-700 ease-in-out relative absolute top-0 md:bg-inherit`}
            >
              <ul className="md:flex text-white text-base font-semibold gap-[50px] mb-5 md:mb-0">
                <li className="hover:text-black pb-3 md:pb-0">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-black pb-3 md:pb-0">
                  <a href="#">About</a>
                </li>
                <li className="hover:text-black pb-3 md:pb-0">
                  <a href="#">Services</a>
                </li>
                <li className="hover:text-black pb-3 md:pb-0">
                  <a href="#">Gallery</a>
                </li>
                <li className="hover:text-black pb-3 md:pb-0">
                  <a href="#">Blog</a>
                </li>
              </ul>
              <button className=" md:hidden md:py-[14px] py-[10px] md:px-[32px] px-5 md:text-base text-[12px] border-white border-[2px] text-white hover:text-black hover:border-black ">
                Contact
              </button>
            </div>
            <div>
              <button className=" md:block hidden md:py-[14px] py-[10px] md:px-[32px] px-5 md:text-base text-[12px] border-white border-[2px] text-white hover:text-black hover:border-black ">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar