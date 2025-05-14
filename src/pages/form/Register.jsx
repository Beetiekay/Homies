import React, { useEffect } from 'react'
import bg from "../../assets/rg.jpg"
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  useEffect(() => {
          AOS.init({duration:1200})
       }) 
  return (
    <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
        <div className='lg:w-[25%] md:w-[70%] relative w-full h-[100vh] flex justify-center items-center overflow-hidden'>
            <img src={bg} className='object-cover absolute h-full w-full'/>
           <div  data-aos="fade-up"  className='w-[100%] h-full  relative flex items-end'>
             

             <div  className='h-[50vh] w-full rounded-t-3xl shadow-md bg-white'>
                <h2 className='text-xl text-center font-semibold pt-10'>Your Ultimate <span className='font-bold'>Destination For Home<br/> Appliance</span></h2>
                <p className='text-[13px] text-center font-semibold mb-7 pt-6'>Shop from a wide range of high-quality home<br/> Appliance at unbeatable price</p>
          
                
                <Link ><div className='px-5 font-semibold mb-8'><Button label={"Explore Now"}/></div></Link>

                
                    <p className='text-center text-sm font-semibold'>Already Have An Account? <Link to={"/signin"} className='font-bold text-kleinblue'>Log-in</Link></p>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Register