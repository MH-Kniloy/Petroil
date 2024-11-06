import React from 'react'

const Ourcompany = () => {
  return (
    <>
      <section className="md:py-[136px] py-[40px] bg-[#F0F0F0]">
        <div className="container max-w-[1140px]">
          <div className='md:flex'>
            <div className="md:w-[35%] bg-primary">
              <h3 className="text-white md:leading-[56px] md:text-[36px] text-xl py-[30px] ps-4 font-bold md:py-[100px] md:ps-[75px]">
                Learn more about our company
              </h3>
            </div>
            <div className="md:w-[65%] bg-ourcompany bg-no-repeat bg-cover bg-center flex justify-center items-center py-[30px] md:py-0">
                <button className='md:text-base text-[10px] font-semibold text-primary md:py-[14px] py-[10px] md:px-[30px] px-5 bg-white'>
                    Learn More
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourcompany