import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Verification = () => {
  return (
    <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
        <div className='lg:w-[25%] md:w-[70%] bg-white relative w-full h-[100vh]'>
            {/* upper */}
            <div>
            <div className='flex justify-center'>
               <div className='w-[90%] pt-5 relative top-2 flex justify-between items-center px-1'>
                <p className='font-semibold text-sm '>OTP verification</p>
                <p className='font-semibold text-sm relative right-4 opacity-80 '>Languange</p>
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
                <div className='w-5 h-5 bg-white border-4 rounded-full border-darknightblue'></div>
                <Link to={"/language"}><div className='w-5 h-5 bg-white border-4 border-gray rounded-full'></div></Link>
                <div className='w-5 h-5 bg-white border-4 border-gray rounded-full '></div>
             </div>  
            </div>
            </div>
          </div>
           {/* upper */}
            
            <h1 className='text-center font-bold mb-2'>OTP VERIFICATION</h1>
            <p className='text-center text-gray mb-4'>We have a OTP Code to this mobile number<br/><span className='font-bold text-darknightblue'>+91 94******40</span> </p>
             
             <div className='flex relative justify-center gap-4 p-6 mb-2'>
              <input type='text' maxLength="1" autoFocus className='w-6 p-3 px-8 border-b-2 border-gray  outline-none'/>
              <input type='text' maxLength="1" className='w-6 border-b-2 text-darknightblue border-gray p-3 px-8  outline-none'/>
              <input type='text' maxLength="1" className='w-6 border-b-2 border-gray p-3 px-8  outline-none'/>
              <input type='text' maxLength="1" className='w-6 border-b-2 border-gray p-3 px-8  outline-none'/>
             </div>

            <p className='text-center text-sm font-semibold mb-5'>Don't You Any Code? <Link className='font-bold text-kleinblue'>Re-send OTP</Link></p>
             
             <div className='px-6'><Link to={"/language"}><Button label={"Verify"}/></Link></div>
        </div>
    </div>
  )
}

export default Verification