import React from 'react'
import bg from "../../assets/rg.jpg"
import Button from '../../components/button'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
        <div className='lg:w-[25%] md:w-[70%] relative w-full h-[100vh] flex justify-center items-center overflow-hidden'>
            <img src={bg} className='object-cover absolute h-full w-full'/>
           <div className='w-[100%] h-full relative flex items-end'>
             
             <div className='h-[50vh] w-full rounded-t-3xl shadow-md bg-white'>
                <h2 className='text-lg text-center font-semibold pt-6'>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit.</h2>
                <h2 className='text-sm text-center mb-7 pt-6'>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit.</h2>

                
                <div className='px-5 mb-8'><Link to={"/signin"}><Button label={"Register Now"}/></Link></div>

                
                    <p className='text-center text-sm font-semibold'>Already Have An Account? <Link className='font-bold text-kleinblue'>Sign Up</Link></p>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Register