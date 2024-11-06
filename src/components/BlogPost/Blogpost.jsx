import React from 'react'

const Blogpost = ({details, bgimageurl}) => {
      const BGimage = {
        backgroundImage: `url(${bgimageurl})`,
      };
  return (
    <>
        <div style={BGimage} className="md:px-11 px-4 md:pt-20 md:pb-12 py-[30px] bg-no-repeat bg-cover bg-center relative before:absolute before:content-[''] before:top-0 before:left-0 before:bg-[#000000] before:bg-opacity-[0.5] before:w-[100%] before:h-[100%]">
          <h4 className='text-white md:text-2xl text-[18px] md:font-bold font-semibold z-10 relative md:pb-11 pb-5'>{details}</h4>
          <button className="bg-gray-400 bg-opacity-[0.7] py-[10px] md:px-6 px-5 md:text-base text-[10px] text-white z-10 relative">
            Read More
          </button>
        </div>
    </>
  );
}

export default Blogpost