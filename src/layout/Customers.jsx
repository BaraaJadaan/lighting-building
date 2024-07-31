import React from 'react'
import CustomarCarousal from '../components/CustomarCarousal'
import quote from '../assets/quote.svg'
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'

function Customers() {
  return (
    <div className='bg-[#282828] relative min-h-screen py-10'>
      <div className='container mx-auto px-4'>
        <div className='relative'>
          <CustomarCarousal /> 
          <img src={quote} alt="quote" className='hidden lg:block absolute left-40 top-28 w-auto h-auto' />
        </div>
        <h1 className='text-white opacity-50 text-center mt-10 lg:mt-0'>Trusted by</h1>
        <div className='flex flex-wrap justify-center mt-5'>
          <img src={logo2} alt="logo1" className='m-4 w-20 lg:w-auto'/>
          <img src={logo3} alt="logo1" className='m-4 w-20 lg:w-auto'/>
          <img src={logo1} alt="logo1" className='m-4 w-20 lg:w-auto'/>
          <img src={logo2} alt="logo1" className='m-4 w-20 lg:w-auto'/>
          <img src={logo3} alt="logo1" className='m-4 w-20 lg:w-auto'/>
        </div>
      </div>
    </div>
  )
}

export default Customers
