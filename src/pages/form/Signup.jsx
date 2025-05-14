import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo1.png"
import bag1 from "../../assets/cart1.png"
import bag2 from "../../assets/cart2.png"
import email from "../../assets/email.png"
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import {FaFacebook} from "react-icons/fa"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {
   const [showpass, setShowpass] = useState(false);
  
  useEffect(() => {
        AOS.init({duration:1200})
     }) 
  return (
    <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
       <div className='lg:w-[25%] md:w-[70%] bg-white relative w-full h-[100vh]'>
         <h1 className='pt-2 mb-2 font-semibold text-center text-xl'>Create A New Account</h1>
         
         <form  className='h-[100vh] flex items-end w-full px-4'>
          <div data-aos="fade-up" className='w-[100%] h-[95vh] rounded-t-3xl px-6 bg-darknightblue bg-opacity-10'>
            <h1 className='text-2xl -mt-4  text-center relative top-8 mb-8 font-semibold'>Sign-Up</h1>
            <div className='mb-4'>
                <label className='font-semibold mb-2 relative -top-1'>Username</label>
               <Input placeholder="Username"/>
            </div>

            <div className='mb-4'>
                <label className='font-semibold mb-2 relative -top-1'>Mobile no</label>
               <Input placeholder="Enter Mobile no"/>
            </div>

            <div className='mb-4'>
                 <label className='font-semibold relative -top-1'>Password</label>
                 <Input placeholder="Enter Password" type={showpass ? "text" : "password"} autoComplete='off'/>
                  <div onClick={() => setShowpass(!showpass)} className='relative -top-[2.6rem] translate-y-1/2 cursor-pointer text-lg opacity-100'>
                   {showpass ? <FaRegEye size={22} className='absolute right-2 top-2'/> : <FaRegEyeSlash size={22} className='absolute right-2 top-2'/>}
                   </div>
            </div>

            <div className='mb-4'>
                 <label className='font-semibold relative -top-1'>Confirm Password</label>
                 <Input placeholder="Re-Enter Password" type={showpass ? "text" : "password"} autoComplete='off'/>
                  <div onClick={() => setShowpass(!showpass)} className='relative -top-[2.6rem] translate-y-1/2 cursor-pointer text-lg opacity-100'>
                   {showpass ? <FaRegEye size={22} className='absolute right-2 top-2'/> : <FaRegEyeSlash size={22} className='absolute right-2 top-2'/>}
                   </div>
            </div>

           <div className='flex justify-center mb-2'><Link className='text-kleinblue font-semibold text-sm'>Forgot password?</Link></div> 
            <div className='font-semibold mb-4'><Button type="submit" label={"Login"}/></div>
             <div className='opacity-60 mb-3'><hr/></div>
             <p className='text-center text-sm font-semibold mb-2'>Already Have An Account? <Link to={"/signin"} className='font-bold text-kleinblue'>Sign-In</Link></p>
              <p className='font-semibold text-xs text-center mb-2'>OR</p>

                <div>
                 <button className=' w-full py-3 px-2 justify-center gap-5 font-semibold border mb-2 flex items-center outline-none hover:scale-95 hover:opacity-60 text-sm  rounded-lg' >
                   <img src={email} className='w-[10%]'/>
                   <h1>Continue with Gmail</h1>
                 </button>
                 <button className=' w-full py-3 px-2 justify-center gap-2 font-semibold border flex items-center outline-none hover:scale-95 hover:opacity-60 text-sm  rounded-lg' >
                    <FaFacebook size={20} className='text-darknightblue'/>
                   <h1>Continue with Facebook</h1>
                 </button>
                </div>
          </div>
         </form>
       </div>
    </div>
  )
}

export default Signup