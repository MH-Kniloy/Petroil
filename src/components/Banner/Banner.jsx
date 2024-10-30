import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="py-[260px] bg-banner bg-cover bg-no-repeat bg-center relative before:absolute before:content-[''] before:top-0 before:left-0 before:bg-[#000000] before:bg-opacity-[0.5] before:w-[100%] before:h-[100%]">
        <div className="container max-w-[1140px]">
          <h1 className='text-[64px] font-bold w-[840px] text-white pb-[45px] relative z-10'>We exist since 1975 on the oil and gas industry.</h1>
          <button className='uppercase py-[14px] px-[40px] text-white bg-primary relative z-10 hover:text-black'>learn more</button>
        </div>
      </div>
    </>
  );
}

export default Banner