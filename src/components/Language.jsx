import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Language = () => {
  return (
    <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
        <div className='lg:w-[25%] md:w-[70%] bg-white relative w-full h-[100vh]'>
            {/* upper */}
            <div>
            <div className='flex justify-center'>
               <div className='w-[90%] pt-5 relative top-2 flex justify-between items-center px-1'>
                <p className='font-semibold opacity-80 text-sm '>OTP verification</p>
                <p className='font-semibold text-sm relative right-4  '>Languange</p>
                <p className='font-semibold text-sm opacity-80 '>Welcome</p>
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
                <div className='w-5 h-5 bg-white border-4 border-darknightblue rounded-full'></div>
                <div className='w-5 h-5 bg-white border-4 border-gray rounded-full '></div>
             </div>  
            </div>
            </div>
            </div>
             {/* upper */}

             <div className='px-6 py-8'>
                <div className='flex justify-between items-center mb-4'>
                    <p className='text-sm font-semibold'>Choose Your Language</p>
                    <Link to={"/welcome"} className='text-darknightblue font-semibold text-sm'>Skip</Link>
                </div>

                <select className='mb-4 p-2 py-2 outline-none rounded-lg w-full border border-kleinblue text-darknightblue'>
                    <option>English</option>
                    <option>Hausa</option>
                    <option>Yoruba</option>
                    <option>Igbo</option>
                    <option>Inya muranci</option>
                </select>

              <Link to={"/welcome"}><Button label={"Continue"} /></Link> 
             </div>
        </div>
    </div>
  )
}

export default Language