import React from 'react'

const Ourcompany = () => {
  return (
    <>
      <section className="py-[136px] bg-[#F0F0F0]">
        <div className="container max-w-[1140px]">
          <div className='flex'>
            <div className="w-[35%] bg-primary">
              <h3 className="text-white text-[36px] font-bold py-[100px] ps-[75px]">
                Learn more about our company
              </h3>
            </div>
            <div className="w-[65%] bg-ourcompany bg-no-repeat bg-cover bg-center flex justify-center items-center">
                <button className='text-base font-semibold text-primary py-[14px] px-[30px] bg-white'>
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