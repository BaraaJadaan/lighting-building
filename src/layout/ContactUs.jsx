import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import about from '../assets/about.png';
import lighting from '../assets/lighting.svg';
import interiorLighting from '../assets/interior-lighting.svg';
import lightingDesign from '../assets/lighting-design.svg';
import ContactForm from '../components/ContactForm';


function ImagePhobic() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const offsetX = (clientX - windowWidth / 2) * -0.05;
      const offsetY = (clientY - windowHeight / 2) * -0.05;

      gsap.to(imgRef.current, {
        x: offsetX,
        y: offsetY,
        ease: 'power3.out',
        duration: 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      <div className="flex justify-center items-center content-center absolute left-40 inset-0 z-0">
        <img
          ref={imgRef}
          src={about}
          alt="about"
        />
      </div>
      <div className="relative z-10 grid grid-cols-2 gap-4 mt-20">
        <div className='grid justify-center'>
          <div className='flex items-center'>
            <img src={lighting} alt="lighting" className='mb-2' />
            <h1 className='font-bold text-sm'>LIGHTING</h1>
          </div>
          <p className=' opacity-70 mb-14'>
            We provide high-quality <br />
            lighting services.
          </p>

          <div className='flex items-center'>
            <img src={interiorLighting} alt="lighting" className='mb-2' />
            <h1 className='font-bold text-sm'>INTERIOR LIGHTING</h1>
          </div>
          <p className=' opacity-70 mb-14'>
            Our team offers unique and stylish <br />
            architecture solutions.
          </p>

          <div className='flex items-center'>
            <img src={lightingDesign} alt="lighting" className='mb-2' />
            <h1 className='font-bold text-sm'>LIGHTING DESIGN</h1>
          </div>
          <p className=' opacity-70 mb-14'>
            Let our team design unique <br />
            lighting for your home.
          </p>
        </div>

        <div>
          <h1 className='font-bold text-2xl mb-4'>
            FIND OUT THE PRICE <br />
            OF YOUR LIGHT PRODUCTS
          </h1>
          <p className='text-[#C4956A] text-xs font-bold'>WE WILL CONTACT YOU WITHIN 24 HOURS</p>
          <div>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagePhobic;
