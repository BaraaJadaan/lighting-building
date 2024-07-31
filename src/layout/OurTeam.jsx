import React from 'react';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.png';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import email from '../assets/email.svg';

export default function OurTeam() {
  const teamMembers = [
    { img: team1, name: 'MIKE BALMER', role: 'Lead Interior Designer', social: [facebook, instagram, email] },
    { img: team2, name: 'SAM BALMER', role: 'Senior Architect', social: [facebook, instagram, email] },
    { img: team3, name: 'JACK MILLER', role: 'Exterior & Landscape Designer', social: [facebook, instagram, email] },
    { img: team4, name: 'JOHN BALMER', role: 'Project Manager', social: [facebook, instagram, email] }
  ];

  return (
    <section className='bg-[#F5F5F5] relative h-full'>
      <div className='mt-10'>
        <h1 className='text-2xl text-center font-bold mb-4 pt-14'>OUR TEAM</h1>
        <h2 className='text-center text-[#C4956A] font-bold mb-20'>PEOPLE BEHIND OUR SUCCESS</h2>
      </div>
      <div className='flex flex-wrap justify-center mx-16'>
        {teamMembers.map((member, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/4 p-4'>
            <div className='bg-white pb-2 mx-1'>
              <img src={member.img} alt={member.name} className='w-full' />
              <h1 className='text-xl ml-4 mt-4 font-bold hover:text-[#C4956A] transition-all inline'>{member.name}</h1>
            </div>
            <p className='text-[#C4956A] font-bold ml-5 mb-3'>{member.role}</p>
            <div className='flex items-center relative ml-5'>
              <div className=' border-t-2 border-black w-20 mr-16 opacity-50'></div>
              {member.social.map((icon, iconIndex) => (
                <img key={iconIndex} src={icon} alt="social icon" className='mx-2' />
              ))}
            </div>
            <div className='ml-5 relative bottom-12'>
              <p className='text-7xl text-[#282828] font-extrabold opacity-5'>{member.name.split(' ')[0]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
