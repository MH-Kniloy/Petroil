import React from 'react'
import slider1 from '../../assets/slider1.png'
import slider2 from '../../assets/slider2.png'
import slider3 from '../../assets/slider3.png'
import slider4 from '../../assets/slider4.png'
import Reactslick from '../ReactSlick/Reactslick'


const Slider = () => {
  return (
    <>
    
    <section>
       <Reactslick slider1={slider1} slider2={slider2} slider3={slider3} slider4={slider4} />
    </section>
    
    </>
  )
}

export default Slider