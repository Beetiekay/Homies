import React, { useEffect } from 'react'
import logo from "../../assets/logo1.png"
import bag1 from "../../assets/cart1.png"
import bag2 from "../../assets/cart2.png"
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Signin = () => {
  useEffect(() => {
        AOS.init({duration:1200})
     }) 
  return (
    <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
       <div className='lg:w-[25%] md:w-[70%] bg-white relative w-full h-[100vh]'>
         <h1 className='pt-5 font-semibold text-center text-2xl'>WELCOME TO</h1>
         <div className='w-[100%] flex justify-center absolute'><img src={logo} className='w-72 relative -top-28 left-5'/></div>
         <div className='w-full h-28 absolute top-36'>
          <div className=''>
           <div className='flex justify-center relative -top-6'><img src={bag1} className='w-32'/></div>
          <div className='flex justify-center'><img src={bag2} className='w-20 relative -top-24'/></div>
           </div>
         </div>
         <div className='h-[100vh] flex items-end w-full px-4'>
          <div data-aos="fade-up" className='w-[100%] h-[70vh] rounded-t-3xl px-6 bg-darknightblue bg-opacity-10'>
            <h1 className='text-2xl pt-2 text-center relative top-8 mb-8 font-semibold'>Login</h1>
            <div className='mb-4'>
                <label className='font-semibold mb-2'>Username</label>
               <Input placeholder="Username"/>
            </div>

            <div className='mb-4'>
                <label className='font-semibold mb-2'>Password</label>
               <Input placeholder="Enter Password"/>
            </div>

           <div className='flex justify-center mb-2'><Link className='text-kleinblue font-semibold text-sm'>Forgot password?</Link></div> 
            <div className='font-semibold mb-4'><Button label={"Login"}/></div>
             <div className='opacity-60 mb-3'><hr/></div>
             <p className='text-center text-sm font-semibold'>Don't Have An Account? <Link className='font-bold text-kleinblue'>Sign-Up</Link></p>
             
             <div>
              <button></button>
             </div>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Signin