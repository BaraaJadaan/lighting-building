import React from 'react';

function ContactForm() {
  return (
    <div className="inline ">
      <div className="w-full mt-10 max-w-md p-8 space-y-6 bg-[#282828] rounded shadow-lg">
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full px-3 mt-1 text-white bg-[#282828] border-b-2 border-[#313131] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-3 mt-1 text-white bg-[#282828] border-b-2 border-[#313131] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="block w-full px-3 mt-1 text-white bg-[#282828] border-b-2 border-[#313131] focus:outline-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className=" px-10 py-3 text-xs font-bold text-white bg-[#C4956A] focus:outline-none focus:ring-offset-2"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
