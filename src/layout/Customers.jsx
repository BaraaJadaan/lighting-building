import React from 'react'
import CustomarCarousal from '../components/CustomarCarousal'
import quote from '../assets/quote.svg'
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'

function Customers() {
  return (
    <div className='bg-[#282828] relative h-[85vh]'>
        <div>
            <CustomarCarousal/> 
        </div>
        <img src={quote} alt="quote" className='absolute left-40 top-28' />
        <h1 className='text-white opacity-50 ml-[24%]'>Trusted by</h1>
        <div className='flex mx-[24%] mt-5'>
            <img src={logo2} alt="logo1" className='me-8'/>
            <img src={logo3} alt="logo1" className='mx-10'/>
            <img src={logo1} alt="logo1" className='mx-10' />
            <img src={logo2} alt="logo1" className='mx-10'/>
            <img src={logo3} alt="logo1" className='mx-10'/>
        </div>
    </div>
  )
}

export default Customers