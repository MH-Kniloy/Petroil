import React from 'react'

const Servicecomp = ({details, bgimageurl}) => {
  const BGimage = {
    backgroundImage: `url(${bgimageurl})`,
  };
  return (
    <>
      <div
        style={BGimage}
        className="py-[145px] ps-[115px]  bg-service1 relative w-[100%] bg-cover bg-no-repeat bg-center after:absolute after:content-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:bg-opacity-[0.6]"
      >
        <h3 className="text-[36px] font-bold mb-5 text-white z-10 relative">
          {details}
        </h3>
        <button className="py-[14px] px-[30px] bg-primary text-white z-10 relative">
          Learn More
        </button>
      </div>
    </>
  );
}

export default Servicecomp