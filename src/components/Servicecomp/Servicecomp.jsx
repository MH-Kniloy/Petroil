import React from 'react'

const Servicecomp = ({details, bgimageurl}) => {
  return (
    <>
      <div
        className={`md:py-[145px] py-[50px] md:ps-[115px] px-4 md:px-0 ${bgimageurl} relative w-[100%] bg-cover bg-no-repeat bg-center after:absolute after:content-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:bg-opacity-[0.6]`}
      >
        <h3 className="md:text-[36px] text-xl font-bold mb-5 text-white z-10 relative">
          {details}
        </h3>
        <button className="md:py-[14px] py-[10px] md:px-[30px] px-5 text-[12px] md:text-base bg-primary text-white z-10 relative">
          Learn More
        </button>
      </div>
    </>
  );
}

export default Servicecomp