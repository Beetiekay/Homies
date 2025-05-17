import React from 'react'
import Navigation from '../../components/Navigation'
import { FaCamera, FaHeart, FaMicrophone, FaSearch } from 'react-icons/fa'
import image1 from "../../assets/ban1.png"
import image2 from "../../assets/target.png"
import image3 from "../../assets/ban2.png"

const Home = () => {
  return (
    <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
        <div  className='lg:w-[25%] md:w-[70%] py-8 bg-white relative w-full h-[100vh]'>
          <div data-aos="fade-up" className='w-full h-[100vh] px-3'>
            <div className='flex justify-around gap-3 mb-6'>
              <div className='flex items-center gap-2 px-2 bg-whitegray rounded-3xl shadow-md'>
                <FaSearch size={20} className='hover:scale-110 hover:opacity-40'/>
                <input type='text' name='search' placeholder=' Search Your Appliance' className='p-2 bg-whitegray outline-none text-kleinblue'/>
                <FaMicrophone size={20} className='hover:scale-110 hover:opacity-40'/>
              </div>

              <div className='flex items-center gap-2'>
                <FaCamera size={20} className='hover:opacity-40'/>
                <FaHeart size={20} className='hover:text-red hover:scale-110'/>
              </div>
            </div>
             <p className='font-semibold text-lg mb-2'>Top Selling Brands</p>

             <div className='flex justify-between mb-4'>

              <div className='w-16 h-16 hover:scale-110 flex justify-center items-center rounded-full bg-whitegray border'>
                <h1 className='text-lg font-bold'>SONY</h1>
              </div>

              <div className='w-16 h-16 hover:scale-110  flex justify-center items-center rounded-full bg-whitegray border'>
                <h1 className='text-lg font-bold'>THF</h1>
              </div>

              <div className='w-16 h-16 hover:scale-110  flex gap-1 justify-center items-center rounded-full bg-whitegray border'>
               <div className='w-4 h-4 rounded-full bg-red bg-opacity-75'></div> <h1 className='text-lg font-bold'>LG</h1>
              </div>

              <div className='w-16 h-16 hover:scale-110  flex justify-center items-center rounded-full bg-whitegray border'>
                <h1 className='text-lg font-bold'>Supt</h1>
              </div>
             </div>
              
              <div>
                <div data-aos="zoom-in" className='w-[100%] h-[20vh] overflow-hidden relative bg-red bg-opacity-55 rounded-2xl'>
                  {/* Animated */}
                  <div className='flex justify-between absolute'>
                    <div className='w-4 h-4 rounded-full bg-darknightblue animate-ping'></div>
                    <div className='w-4 h-4 rounded-full bg-opacity-30 translate-y-10 animate-spin bg-darknightblue'></div>
                    <div className='w-4 h-4 rounded-full bg-darknightblue animate-ping'></div>
                  </div>
                  <div className='w-full bottom-1 flex justify-between absolute'>
                    <div className='w-4 h-4 rounded-full bg-darknightblue animate-ping'></div>
                    <div className='w-4 h-4 rounded-full bg-opacity-30 translate-y-10 animate-spin bg-darknightblue'></div>
                    <div className='w-4 h-4 rounded-full bg-darknightblue animate-ping'></div>
                  </div>
                  {/* Animated */}
                  <div className='relative grid grid-cols-3'>
                     <img src={image1} className='w-36'/>
                     <div>
                      <img src={image2} className='w-[70%] mt-8 ml-3'/>
                     </div>
                      <img src={image3} className='scale-125 relative top-10 -left-4'/>
                  </div>
                </div>
              </div>
          </div>
          <div><Navigation/></div>
        </div>
    </div>
  )
}

export default Home