import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="md:py-[260px] py-[130px] px-4 bg-banner bg-cover bg-no-repeat bg-center relative before:absolute before:content-[''] before:top-0 before:left-0 before:bg-[#000000] before:bg-opacity-[0.5] before:w-[100%] before:h-[100%]">
        <div className="container max-w-[1140px]">
          <h1 className='md:text-[64px] text-[24px] font-bold md:w-[840px] text-white md:pb-[45px] pb-[30px] relative z-10'>We exist since 1975 on the oil and gas industry.</h1>
          <button className='uppercase md:text-base text-[12px] md:py-[14px] py-[10px] md:px-[40px] px-5 text-white bg-primary relative z-10 hover:text-black'>learn more</button>
        </div>
      </div>
    </>
  );
}

export default Banner