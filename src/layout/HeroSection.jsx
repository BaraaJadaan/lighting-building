import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import main1 from '../assets/main1.png';
import main2 from '../assets/main2.png';
import main3 from '../assets/main3.png';
import HamburgerNav from '../components/HamburgerNav';

const FeaturedProjects = () => {
  const slidesRef = useRef([]);
  const textRef = useRef([]);
  const currentSlide = useRef(0);

  useEffect(() => {
    gsap.set(slidesRef.current, { autoAlpha: 0 });
    gsap.set(slidesRef.current[0], { autoAlpha: 1 });
    gsap.set(textRef.current, { autoAlpha: 0, y: -50 });
    gsap.set(textRef.current[0], { autoAlpha: 1, y: 0 });
  }, []);

  const nextSlide = () => {
    gsap.to(slidesRef.current[currentSlide.current], { autoAlpha: 0, duration: 2 });
    gsap.to(textRef.current[currentSlide.current], { autoAlpha: 0, y: -50, duration: 2 });
    currentSlide.current = (currentSlide.current + 1) % slidesRef.current.length;
    gsap.to(slidesRef.current[currentSlide.current], { autoAlpha: 1, duration: 2, delay: 0.2 });
    gsap.to(textRef.current[currentSlide.current], { autoAlpha: 1, y: 0, duration: 2, delay: 1 });
  };

  const prevSlide = () => {
    gsap.to(slidesRef.current[currentSlide.current], { autoAlpha: 0, duration: 2 });
    gsap.to(textRef.current[currentSlide.current], { autoAlpha: 0, y: -50, duration: 2 });
    currentSlide.current = (currentSlide.current - 1 + slidesRef.current.length) % slidesRef.current.length;
    gsap.to(slidesRef.current[currentSlide.current], { autoAlpha: 1, duration: 2, delay: 0.2 });
    gsap.to(textRef.current[currentSlide.current], { autoAlpha: 1, y: 0, duration: 2, delay: 1 });
  };

  return (
    <section className='flex h-[90vh] bg-[#282828] -z-10'>
        <div>
            <div className='absolute top-0 left-[5%] w-[1px] h-[80%] mx-auto bg-[#313131] border-0 '></div>
            <div className='absolute top-0 left-[15%] w-[1px] h-[80%] mx-auto  bg-[#313131] border-0 '></div>
            <div className='absolute top-0 left-[25%] w-[1px] h-[80%] mx-auto  bg-[#313131] border-0'></div>
        </div>
      <div className='w-[30%] p-4'>
        <div>
            <HamburgerNav />
        </div>
        <br />
        <div className='flex justify-center mb-14 mt-10 '>
            <h1 className=' text-white text-5xl font-bold z-20'>
            LIGHTING <br />
            & BUILDING
            </h1>
        </div>
        <div className='flex justify-center'>
            <p className=' text-[#C4956A] text-sm font-bold ml-20 z-20'>
                MODERN ENERGY <br />
                EFFICIENT HOUSES <br />
                FROM 150 SQ. M. <br />
            </p>
        </div>
        <div>
            <a href="#"
                class="group text-xs font-bold relative border-2 border-[#C4956A] ease transition-all hover:border-hidden overflow-hidden bg-[#282828] px-10 py-3 top-16 left-20 text-white">
                <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-[#C4956A] transition-all duration-500 group-hover:w-full "></span>
                <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#C4956A] transition-all duration-500 group-hover:h-full"></span>
                <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-[#C4956A] transition-all duration-500 group-hover:w-full"></span>
                <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-[#C4956A] transition-all duration-500 group-hover:h-full"></span>
                CONTACT US
            </a>
        </div>
        <div className='relative bg-[#C4956A] w-48 h-32 top-[25%] left-[40%] z-10'>
            <div className="absolute transform left-10 top-[30%] z-10">
                <button className="text-4xl bg-opacity-75 text-white rounded-full pb-2 px-2 shadow-lg hover:text-opacity-50 transition duration-300 border border-white" onClick={prevSlide}>
                    &larr;   
                </button>
            </div>
            <div className="absolute transform right-10 top-[30%] z-10">
                <button className="text-4xl bg-opacity-75 text-white rounded-full pb-2 px-2 shadow-lg hover:text-opacity-50 transition duration-300 border border-white" onClick={nextSlide}>
                    &rarr;
                </button>
            </div>
        </div>

        
        <div className='absolute bottom-20 left-0 bg-[#313131] w-[30%] h-[13.5%]' ></div> {/* bottom left box */}

      </div>
      <div className="relative h-full overflow-hidden w-[70%]">
        
        <div className="relative h-full">
            <div className='absolute bottom-5 left-20 text-7xl text-[#C4C4C4] font-extrabold opacity-5 z-50'>
                54+ WORKS
            </div>
          {[
            { img: main1, location: "4367 Liberty St", description: "290 SQ. M.", price:'$390 000' },
            { img: main2, location: "2560 Russell St", description: "350 SQ. M.", price:'$340 000' },
            { img: main3, location: "1234 Elm St", description: "290 SQ. M.", price:'$240 000' },
          ].map((project, index) => (
            <div
              key={index}
              className="absolute w-full h-[85%] flex items-center justify-center opacity-0"
              ref={el => slidesRef.current[index] = el}
            >
              <img src={project.img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute flex bg-opacity-50 text-white p-5 bottom-[-13%] right-20 opacity-0 transform translate-y-5" ref={el => textRef.current[index] = el}>
                <p className='mx-10 font-bold text-xs'>{project.location}</p>
                <p className='mx-10 text-[#C4956A] font-bold text-xs'>{project.description}</p>
                <p className='mx-10 text-[#C4956A] font-bold text-xs'>{project.price}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
