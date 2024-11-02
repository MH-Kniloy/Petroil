import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className="bg-primary py-[30px]">
        <div className="container max-w-[1140px]">
          <div className='flex items-center justify-between'>
          <div className='w-[35%] cursor-pointer'>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <ul className='flex text-white text-base font-semibold gap-[50px] '>
              <li className='hover:text-black'><a href="#">Home</a></li>
              <li className='hover:text-black'><a href="#">About</a></li>
              <li className='hover:text-black'><a href="#">Services</a></li>
              <li className='hover:text-black'><a href="#">Gallery</a></li>
              <li className='hover:text-black'><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <button className='py-[14px] px-[32px] border-white border-[2px] text-white hover:text-black hover:border-black '>Contact</button>
          </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar