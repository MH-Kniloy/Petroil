import React from 'react'

const Supplier = () => {
  return (
    <>
      <section className='md:py-[100px] py-[50px] px-4 md:px-0'>
        <div className="container max-w-[1140px]">
          <div className='md:flex justify-between'>
            <h3 className='md:text-[48px] text-[20px] mb-4 md:mb-0 font-bold md:leading-[72px] md:w-[300px]'>The biggest supplier on the country</h3>
            <p className='md:w-[650px] md:text-base text-[14px] text-justify md:text-start font-medium self-center'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Supplier