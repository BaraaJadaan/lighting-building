import React from 'react'
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import email from '../assets/email.svg'

export default function OurTeam() {
  return (
    <section className='bg-[#F5F5F5] relative h-full '>
        <div className='mt-10'>
            <h1 className='text-2xl text-center font-bold mb-4'>OUR TEAM</h1>
            <h2 className='text-center text-[#C4956A] font-bold mb-20'>PEOPLE BEHIND OUR SUCCESS</h2>
        </div>
        <div className='flex justify-center '>
            <div>
                <div className='pb-2 bg-white mx-1'>
                    <img src={team1} alt="team1"/>
                    <h1 className='text-xl ml-4 font-bold hover:text-[#C4956A] transition-all inline'>MIKE BALMER</h1>
                </div>
                <p className='text-[#C4956A] font-bold ml-5 mb-3'>Lead Interior Designer</p>
                <div className='flex items-center relative ml-5'>
                    <div className=' border-t-2 border-black w-20 mr-16 opacity-50'></div>
                    <img src={facebook} alt="facebook" className='mx-2' />
                    <img src={instagram} alt="instagram" className='mx-2'/>
                    <img src={email} alt="email" className='mx-2'/>
                </div>
                <div className='ml-5 absolute bottom-28'>
                    <p className=' text-7xl text-[#282828] font-extrabold opacity-5'>MIKE</p> 
                </div>
            </div>
            <div>
                <div className='pb-2 bg-white mx-1'>
                    <img src={team2} alt="team1"/>
                    <h1 className='text-xl ml-4 font-bold hover:text-[#C4956A] transition-all inline'>SAM BALMER</h1>
                </div>
                <p className='text-[#C4956A] font-bold ml-5 mb-3'>Lead Interior Designer</p>
                <div className='flex items-center relative ml-5'>
                    <div className=' border-t-2 border-black w-20 mr-16 opacity-50'></div>
                    <img src={facebook} alt="facebook" className='mx-2' />
                    <img src={instagram} alt="instagram" className='mx-2'/>
                    <img src={email} alt="email" className='mx-2'/>
                </div>
                <div className='ml-5 absolute bottom-28'>
                    <p className=' text-7xl text-[#282828] font-extrabold opacity-5'>SAM</p> 
                </div>
            </div>
            
            <div>
                <div className='pb-2 bg-white mx-1'>
                    <img src={team3} alt="team1"  />
                    <h1 className='text-xl ml-4 font-bold hover:text-[#C4956A] transition-all inline'>JACK MILLER</h1>
                </div>
                <p className='text-[#C4956A] font-bold ml-5 mb-3'>Lead Interior Designer</p>
                <div className='flex items-center relative ml-5'>
                    <div className=' border-t-2 border-black w-20 mr-16 opacity-50'></div>
                    <img src={facebook} alt="facebook" className='mx-2' />
                    <img src={instagram} alt="instagram" className='mx-2'/>
                    <img src={email} alt="email" className='mx-2'/>
                </div>
                <div className='ml-5 absolute bottom-28'>
                    <p className=' text-7xl text-[#282828] font-extrabold opacity-5'>JACK</p> 
                </div>
            </div>
            <div className=' mb-36'>
                <div className='pb-2 bg-white mx-1 '>
                    <img src={team4} alt="team1" />
                    <h1 className='text-xl ml-4 font-bold hover:text-[#C4956A] transition-all inline'>JOHN BALMER</h1>
                </div>
                <p className='text-[#C4956A] font-bold ml-5 mb-3'>Lead Interior Designer</p>
                <div className='flex items-center relative ml-5'>
                    <div className=' border-t-2 border-black w-20 mr-16 opacity-50'></div>
                    <img src={facebook} alt="facebook" className='mx-2' />
                    <img src={instagram} alt="instagram" className='mx-2'/>
                    <img src={email} alt="email" className='mx-2'/>
                </div>
                <div className='ml-5 absolute bottom-28'>
                    <p className=' text-7xl text-[#282828] font-extrabold opacity-5'>JOHN</p> 
                </div>

            </div>
            
        </div>
        
    </section>
  )
}
