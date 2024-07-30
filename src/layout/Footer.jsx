import React from 'react';
import logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer className="bg-[#282828] text-gray-400 p-8 ">
      <div className="w-[100%]">
        <div className="grid grid-cols-2 md:grid-cols-4 text-sm ml-36">
          <div>
            <h4 className="text-white font-semibold mb-2">OUR ADDRESS</h4>
            <address className="not-italic">
              2200 Clarendon Blvd., Suite 1400A<br />
              Arlington, VA 22201, USA
            </address>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">SOCIALS</h4>
            <ul>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">PHONE</h4>
            <a href="tel:1-800-901-234" className="hover:text-white">1-800-901-234</a>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">EMAIL</h4>
            <a href="mailto:info@atclink.org" className="hover:text-white">info@atclink.org</a>
          </div>
        </div>
        <div className="mt-8 pt-4 flex flex-col items-center justify-center text-xs text-gray-500">
          <div className="flex items-center justify-center w-full mb-4">
            <div className=" border-t border-[#707070] w-96 opacity-40"></div>
            <div className="flex-shrink mx-4">
              <img src={logo} alt="Your Logo" className=" mx-auto" />
            </div>
            <div className="border-t border-[#707070] w-96 opacity-40"></div>
          </div>
          <p>&copy; 2024 Website Demo. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
