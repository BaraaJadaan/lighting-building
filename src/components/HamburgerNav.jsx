import React, { useState } from 'react';
import mobileIcon from '../assets/mobile-icon.png';

function HamburgerNav() {
  const [isShow, setIsShow] = useState(false);

  const navClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <button className="relative group left-[60%]" onClick={navClick}>
        <div className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-[#282828] ring-0 ring-gray-300 hover:ring-8 focus:ring-4 ring-opacity-30 duration-200 shadow-md`}>
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isShow ? 'translate-x-10' : ''}`}></div>
            <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isShow ? 'translate-x-10 delay-75' : ''}`}></div>
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isShow ? 'translate-x-10 delay-150' : ''}`}></div>
            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${isShow ? 'translate-x-0 flex w-12' : 'w-0'}`}>
              <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${isShow ? 'rotate-45' : ''}`}></div>
              <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${isShow ? '-rotate-45' : ''}`}></div>
            </div>
          </div>
        </div>
      </button>
      <div className={`fixed top-0 left-[30%] z-20 w-auto bg-white shadow-md transition-all duration-500 ease-in-out transform ${isShow ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <nav className="flex justify-center items-center p-7">
          <a href="#home" className="text-xs text-[#C99F77] transition-all mx-4">HOME</a>
          <a href="#about" className="text-black text-xs hover:text-[#C99F77] transition-all mx-4">ABOUT</a>
          <a href="#team" className="text-black text-xs hover:text-[#C99F77] transition-all mx-4">TEAM</a>
          <a href="#projects" className="text-black text-xs hover:text-[#C99F77] transition-all mx-4">CUSTOMERS</a>
          <a href="#contacts" className="text-black text-xs hover:text-[#C99F77] transition-all mx-4">PROJECT</a>
          <div className='flex items-center mx-4'>
            <img className='mr-2' src={mobileIcon} alt="mobileIcon" />
            <a href="tel:1-800-901-234" className="text-black text-xs hover:text-[#C99F77] transition-all"> 1-800-901-234</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HamburgerNav;
