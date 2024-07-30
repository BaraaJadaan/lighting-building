import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../index.css'; // Import the Tailwind CSS file
import projects1 from '../assets/projects1.png';
import projects2 from '../assets/projects2.png';
import projects3 from '../assets/projects3.png';

const FeaturedProjects = () => {
  const slidesRef = useRef([]);
  const textRef = useRef([]);
  const currentSlide = useRef(0);

  useEffect(() => {
    setupSlides();
  }, []);

  const setupSlides = () => {
    gsap.set(slidesRef.current, { autoAlpha: 0, x: '100%' });
    gsap.set(slidesRef.current[currentSlide.current], { autoAlpha: 1, x: '0%' });
    gsap.set(textRef.current, { autoAlpha: 0, y: 20 });
    gsap.set(textRef.current[currentSlide.current], { autoAlpha: 1, y: 0 });
    gsap.set(slidesRef.current[getPrevSlideIndex()], { autoAlpha: 0.5, x: '-100%' });
    gsap.set(slidesRef.current[getNextSlideIndex()], { autoAlpha: 0.5, x: '100%' });
  };

  const getNextSlideIndex = () => {
    return (currentSlide.current + 1) % slidesRef.current.length;
  };

  const getPrevSlideIndex = () => {
    return (currentSlide.current - 1 + slidesRef.current.length) % slidesRef.current.length;
  };

  const nextSlide = () => {
    const nextIndex = getNextSlideIndex();
    const prevIndex = getPrevSlideIndex();
    gsap.timeline()
      .to(slidesRef.current[currentSlide.current], { autoAlpha: 0.5, x: '-100%', duration: 0.75, ease: 'power2.inOut' })
      .to(slidesRef.current[nextIndex], { autoAlpha: 1, x: '0%', duration: 0.75, ease: 'power2.inOut' }, '-=0.75')
      .set(slidesRef.current[prevIndex], { autoAlpha: 0.5, x: '100%' })
      .to(textRef.current[currentSlide.current], { autoAlpha: 0, y: 20, duration: 0.75, ease: 'power2.inOut' }, '-=0.75')
      .to(textRef.current[nextIndex], { autoAlpha: 1, y: 0, duration: 0.75, ease: 'power2.inOut' }, '-=0.75');
    currentSlide.current = nextIndex;
    setTimeout(() => setupSlides(), 750); // Ensure setupSlides is called after transition
  };

  const prevSlide = () => {
    const prevIndex = getPrevSlideIndex();
    const nextIndex = getNextSlideIndex();
    gsap.timeline()
      .to(slidesRef.current[currentSlide.current], { autoAlpha: 0.5, x: '100%', duration: 0.75, ease: 'power2.inOut' })
      .to(slidesRef.current[prevIndex], { autoAlpha: 1, x: '0%', duration: 0.75, ease: 'power2.inOut' }, '-=0.75')
      .set(slidesRef.current[nextIndex], { autoAlpha: 0.5, x: '-100%' })
      .to(textRef.current[currentSlide.current], { autoAlpha: 0, y: 20, duration: 0.75, ease: 'power2.inOut' }, '-=0.75')
      .to(textRef.current[prevIndex], { autoAlpha: 1, y: 0, duration: 0.75, ease: 'power2.inOut' }, '-=0.75');
    currentSlide.current = prevIndex;
    setTimeout(() => setupSlides(), 750); // Ensure setupSlides is called after transition
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="relative h-full flex justify-center items-center">
        {[
          { img: projects1, title: "3119 MULBERRY LN, NEWCASTLE, OK", description: "We have worked on this project for three months to completely extend and redesign the old 2-storey house.", date: "MARCH 15, 2022", category: "ARCHITECTURE" },
          { img: projects2, title: "4367 LIBERTY ST, IRVING, TX", description: "Our team of exterior designers and architects integrated the latest innovations in this residential project.", date: "JUNE 19, 2022", category: "EXTERIOR DESIGN" },
          { img: projects3, title: "2560 RUSSELL ST, BOSTON, MA", description: "As one of our first projects in 2022, this house features unique landscape design solutions and work on exterior.", date: "JANUARY 10, 2022", category: "LANDSCAPE DESIGN" },
        ].map((project, index) => (
          <div
            key={index}
            className="absolute w-1/3 h-full opacity-0"
            ref={el => slidesRef.current[index] = el}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img src={project.img} alt={`Slide ${index + 1}`} className="w-full mx-2 object-contain" />
            </div>
            <div className="absolute bg-[#282828] text-white text-sm px-5 py-7 mr-38 top-[55%] right-[20%] opacity-0 " ref={el => textRef.current[index] = el}>
              <div className="text-sm mb-2 flex items-center space-x-2">
                <span>{project.date}</span>
                <span className="mx-2">|</span>
                <span>{project.category}</span>
              </div>
              <div className="text-xl font-bold text-[#C4956A] mb-4">
                {project.title}
              </div>
              <div className="text-white opacity-50">
                {project.description}
              </div>
            </div>
          </div>
        ))}
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white bg-opacity-75 text-black rounded-full p-2 shadow-lg hover:bg-gray-200 transition duration-300"
          onClick={prevSlide}
        >
          ‹
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white bg-opacity-75 text-black rounded-full p-2 shadow-lg hover:bg-gray-200 transition duration-300"
          onClick={nextSlide}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default FeaturedProjects;
