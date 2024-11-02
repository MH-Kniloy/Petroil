import React from 'react'

const Blogpost = ({details, bgimageurl}) => {
      const BGimage = {
        backgroundImage: `url(${bgimageurl})`,
      };
  return (
    <>
        <div style={BGimage} className="px-11 pt-20 pb-12 bg-no-repeat bg-cover bg-center relative before:absolute before:content-[''] before:top-0 before:left-0 before:bg-[#000000] before:bg-opacity-[0.5] before:w-[100%] before:h-[100%]">
          <h4 className='text-white text-2xl font-bold z-10 relative pb-11'>{details}</h4>
          <button className="bg-gray-400 bg-opacity-[0.7] py-[10px] px-6 text-white z-10 relative">
            Read More
          </button>
        </div>
    </>
  );
}

export default Blogpost