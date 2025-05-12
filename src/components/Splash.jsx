import React, { useEffect, useState } from 'react'
import image from "../assets/logo2.png";

const Splash = () => {
     const [open, setOpen] = useState(false);
    
        useEffect(() => {
        setOpen(true)
    
        setTimeout(() => {
        setOpen(false)
    
        }, 3000);
      },[])

  return (
    <div>
        {
         open &&(
        <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
          <div className='lg:w-[25%] md:w-[70%] w-fit h-[100vh] flex justify-center items-center bg-darknightblue'>
             <img src={image} className='w-[60%] animate-pulse'/>
          </div> 
        </div>
         )}
    </div>
  )
}

export default Splash