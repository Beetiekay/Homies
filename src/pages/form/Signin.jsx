import React from 'react'
import logo from "../../assets/logo1.png"
import bag1 from "../../assets/cart1.png"
import bag2 from "../../assets/cart2.png"
import Input from '../../components/Input'

const Signin = () => {
  return (
    <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
       <div className='lg:w-[25%] md:w-[70%] bg-white relative w-full h-[100vh] overflow-hidden'>
         <h1 className='pt-10 font-semibold text-center text-2xl'>WELCOME TO</h1>
         <div className='flex justify-center'><img src={logo} className='w-72 relative -top-28 left-5'/></div>
         <div>
           <img src={bag1} className='w-28'/>
           <img src={bag2} className='w-10'/>
         </div>
         <div className='h-full w-full'>
          <div className='w-[100%] h-[60vh] rounded-t-3xl px-6 bg-darknightblue bg-opacity-10'>
            <h1 className='text-2xl pt-3 text-center relative top-8 mb-8 font-semibold'>Login</h1>
            <label className='font-semibold'>Username</label>
            <Input placeholder="Username"/>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Signin