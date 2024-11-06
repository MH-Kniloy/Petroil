import React from 'react'
import Servicecomp from '../Servicecomp/Servicecomp'

const Ourservices = () => {
    const details = [
      {
        details: "Modern natural oil and gas refineries.",
        imageUrl: `bg-service1`,
      },
      {
        details: "Supply of national industries.",
        imageUrl: `bg-service2`,
      },
      {
        details: "National fuel distribution and supply.",
        imageUrl: `bg-service3`,
      },
    ];
  return (
    <>
      <section className="md:flex flex-wrap">
        <div className="md:w-1/2 md:ps-[390px] md:pt-[106px] pb-8 md:pb-0 px-4 md:px-0">
          <h3 className='md:text-[64px] text-xl font-bold mb-2 md:mb-0 md:pb-[36px]'>Our Services</h3>
          <p className="md:w-[405px] md:text-base text-[14px] text-justify md:text-start font-medium text-[#6C6C6C] md:ps-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        {details.map((item) => (
          <div className="md:w-1/2 mb-8 md:mb-0 last:mb-0">
            <Servicecomp details={item.details} bgimageurl={item.imageUrl}/>
          </div>
        ))}
      </section>
    </>
  );
}

export default Ourservices