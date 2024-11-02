import React from 'react'
import Servicecomp from '../Servicecomp/Servicecomp'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'

const Ourservices = () => {
    const details = [
      {
        details: "Modern natural oil and gas refineries.",
        imageUrl: `${service1}`,
      },
      {
        details: "Supply of national industries.",
        imageUrl: `${service2}`,
      },
      {
        details: "National fuel distribution and supply.",
        imageUrl: `${service3}`,
      },
    ];
  return (
    <>
      <section className="flex flex-wrap">
        <div className="w-1/2 ps-[390px] pt-[106px]">
          <h3 className='text-[64px] font-bold'>Our Services</h3>
          <p className="w-[405px] text-base font-medium text-[#6C6C6C] ps-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        {details.map((item) => (
          <div className="w-1/2">
            <Servicecomp details={item.details} bgimageurl={item.imageUrl}/>
          </div>
        ))}
      </section>
    </>
  );
}

export default Ourservices