import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import '../index.css'; // Import the Tailwind CSS file
import projects1 from '../assets/projects1.png';
import projects2 from '../assets/projects2.png';
import projects3 from '../assets/projects3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedProjects = () => {
  const slidesRef = useRef([]);
  const textRef = useRef([]);
  const currentSlide = useRef(0);

  useEffect(() => {
    setupSlides();
  }, []);

  const setupSlides = () => {
    gsap.set(textRef.current, { autoAlpha: 0, y: 0 });
    gsap.set(textRef.current[currentSlide.current], { autoAlpha: 1, y: 0 });
    gsap.set(slidesRef.current[getPrevSlideIndex()], { autoAlpha: 0.5, x: '-120%' });
    gsap.set(slidesRef.current[getNextSlideIndex()], { autoAlpha: 0.5, x: '120%' });
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
    gsap.to(slidesRef.current[currentSlide.current], { autoAlpha: 0.5, x: '-120%', duration: 0.75 })
    gsap.to(slidesRef.current[nextIndex], { autoAlpha: 1, x: '0%', duration: 0.75 })
    gsap.to(slidesRef.current[prevIndex], { autoAlpha: 0.5, x: '-150%', duration: 0.75 })
    gsap.set(slidesRef.current[prevIndex], { autoAlpha: 0, x: '250%' })
    gsap.to(slidesRef.current[prevIndex], { autoAlpha: 0.5, x: '120%', duration: 0.75 })
    gsap.to(textRef.current[currentSlide.current], { autoAlpha: 0})
    gsap.to(textRef.current[nextIndex], { autoAlpha: 1, duration: 1.2 });
    currentSlide.current = nextIndex;

  };

  const prevSlide = () => {
    const prevIndex = getPrevSlideIndex();
    const nextIndex = getNextSlideIndex();
    gsap.to(slidesRef.current[currentSlide.current], { autoAlpha: 0.5, x: '120%', duration: 0.75 })
    gsap.to(slidesRef.current[prevIndex], { autoAlpha: 1, x: '0%', duration: 0.75 })
    gsap.to(slidesRef.current[nextIndex], { autoAlpha: 0.5, x: '150%', duration: 0.75 })
    gsap.set(slidesRef.current[nextIndex], { autoAlpha: 0, x: '-250%' })
    gsap.to(slidesRef.current[nextIndex], { autoAlpha: 0.5, x: '-120%', duration: 0.75 })
    gsap.to(textRef.current[currentSlide.current], { autoAlpha: 0})
    gsap.to(textRef.current[nextIndex], { autoAlpha: 1, duration: 1.2 });
    currentSlide.current = prevIndex;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const projects = [
    { img: projects1, title: "3119 MULBERRY LN, NEWCASTLE, OK", description: "We have worked on this project for three months to completely extend and redesign the old 2-storey house.", date: "MARCH 15, 2022", category: "ARCHITECTURE" },
    { img: projects2, title: "4367 LIBERTY ST, IRVING, TX", description: "Our team of exterior designers and architects integrated the latest innovations in this residential project.", date: "JUNE 19, 2022", category: "EXTERIOR DESIGN" },
    { img: projects3, title: "2560 RUSSELL ST, BOSTON, MA", description: "As one of our first projects in 2022, this house features unique landscape design solutions and work on exterior.", date: "JANUARY 10, 2022", category: "LANDSCAPE DESIGN" },
  ];

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold text-black mb-2">PRO<span className="text-[#C4956A]">JECTS</span></h1>
        <p className="opacity-50 mb-6">Below you can take a look at our featured and recent projects that have been numerously awarded for our unique light products.</p>
        <div className="w-96 h-1 bg-[#C4956A] mx-auto mb-6"></div>
      </div>
      <div className=" relative hidden lg:flex h-[60%] justify-center items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="absolute w-[50%] h-full"
            ref={el => slidesRef.current[index] = el}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img src={project.img} alt={`Slide ${index + 1}`} className="w-full mx-2 object-contain shadow-2xl shadow-gray-500" />
            </div>
            <div className="absolute bg-[#282828] text-white text-sm p-8 mx-10 top-32 right-96" ref={el => textRef.current[index] = el}>
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
      <div className="lg:hidden">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <img src={project.img} alt={`Slide ${index + 1}`} className="w-full object-contain" />
              <div className="bg-[#282828] text-white text-sm px-5 py-7 mt-2 mx-2">
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
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProjects;
