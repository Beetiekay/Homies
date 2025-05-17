import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo1.png"
import { FaChevronRight } from 'react-icons/fa'

const Welcome = () => {
  return (
    <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
        <div className='lg:w-[25%] md:w-[70%] overflow-hidden bg-white relative w-full h-[100vh]'>
          {/* upper */}
          <div>
            <div className='flex justify-center'>
                         <div className='w-[90%] pt-5 relative top-2 flex justify-between items-center px-1'>
                          <p className='font-semibold opacity-80 text-sm '>OTP verification</p>
                          <p className='font-semibold opacity-80 text-sm relative right-4  '>Languange</p>
                          <p className='font-semibold text-sm  '>Welcome</p>
                      </div> 
            </div>
                      
            <div className='relative'>
             <div className='flex h-16 py-6 justify-center items-center'>
               <div className='h-[0.2vh] w-[80%]  bg-gray rounded-sm '>
              </div>    
             </div> 
          
              <div className='w-full flex h-16 absolute top-0 py-6 justify-center items-center'>
             <div className='h-[2vh] w-[80%] relative flex justify-between items-center rounded-sm'>
                 <Link to={"/verify"}><div className='w-5 h-5 bg-white border-4 rounded-full border-gray'></div></Link>
                 <Link to={"/language"}><div className='w-5 h-5 bg-white border-4 border-gray rounded-full'></div></Link>
                 <div className='w-5 h-5 bg-white border-4 border-darknightblue rounded-full '></div>
              </div>  
             </div>
            </div>
          </div>
        {/* upper */}
         <Link to={"/language"} className='relative z-10 font-semibold px-6 text-darknightblue'>Previous</Link>
         <div className='px-6 py-10'>
            <h1  className=' text-3xl'>Welcome to</h1>
            <img src={logo} className='relative -top-32 right-4'/>
            <p className='text-[16px] relative -top-64  pt-6'>Shop from a wide range of high-quality home Appliance at unbeatable price</p>
            <div className='flex justify-center -mt-10'>
                <Link to={"/home"}><button className='outline-none shadow-md scale-90 animate-spin hover:opacity-40 p-5 rounded-full bg-darknightblue text-white'><FaChevronRight size={25} className='translate-x-3 animate-spin duration-700'/></button></Link>
            </div>
         </div>

        </div>
    </div>
  )
}

export default Welcome