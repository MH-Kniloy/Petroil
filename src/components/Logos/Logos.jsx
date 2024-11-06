import React from 'react'
import Reactslick from '../ReactSlick/Reactslick'
import Logo1 from '../../assets/logo1.png'
import Logo2 from '../../assets/logo2.png'
import Logo3 from '../../assets/logo3.png'
import Logo4 from '../../assets/logo4.png'

const Logos = () => {
  return (
    <>
    
    <section className='md:py-[140px]'>
        <div className="container max-w-[1140px]">
            <Reactslick slider1= {Logo1} slider2= {Logo2} slider3= {Logo3} slider4= {Logo4} />
        </div>

    </section>
    
    </>
  )
}

export default Logos