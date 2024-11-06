import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="bg-primary py-12 border-b-[5px] border-b-[#FFB800]">
        <div className="container max-w-[1140px]">
          <div className="md:flex justify-between items-center px-4 md:px-0">
            <div className=''>
              <h3 className='text-white md:text-4xl text-[20px] md:font-bold font-semibold mb-5 md:mb-0'>Want to join as member branch in your area?</h3>
            </div>
            <div>
                <button className='border-[2px] border-white md:text-base text-[10px] md:py-[14px] py-[10px] md:px-[30px] px-5 bg-transparent uppercase text-white'>Contact</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact