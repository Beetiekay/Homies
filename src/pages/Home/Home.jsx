import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import { FaCamera, FaHeart, FaMicrophone, FaSearch } from 'react-icons/fa'
import image1 from "../../assets/ban1.png"
import image2 from "../../assets/target.png"
import image3 from "../../assets/ban2.png"
import round1 from "../../assets/r1.png"
import round2 from "../../assets/r2.png"
import round3 from "../../assets/r3.png"
import Card from '../../components/Card'


const Home = () => {
   
  return (
    <div className='w-full h-[100vh] flex justify-center bg-kleinblue fixed top-0'>
        <div  className='lg:w-[25%] md:w-[70%] overflow-hidden  py-8 bg-white relative w-full overflow-y-auto mb-6 h-[100vh]'>
          <div data-aos="fade-up" className='w-full h-[100vh] mb-28 px-3'>

            <div className='w-[100%] h-[10vh]'></div>

             <p className='font-semibold text-lg mb-2'>Top Selling Brands</p>

             <div className='flex justify-between mb-4'>

              <div className='w-20 h-20 border-darknightblue  hover:scale-95 flex justify-center items-center rounded-full border'>
                <h1 className='text-lg font-bold'>SONY</h1>
              </div>

              <div className='w-20 h-20 border-darknightblue  relative overflow-hidden hover:scale-95  flex justify-center items-center rounded-full border'>
                <img src={round1} className='w-14'/>
              </div>

              <div className='w-20 h-20  border-darknightblue  relative overflow-hidden hover:scale-95  flex justify-center items-center rounded-full border'>
                <img src={round2} className='w-14'/>
              </div>

              <div className='w-20 h-20  border-darknightblue relative overflow-hidden hover:scale-95  flex justify-center items-center rounded-full border'>
                <img src={round3} className='w-14'/>
              </div>

             
             </div>
              
              <div className=''>
                <div data-aos="zoom-in" className='w-[100%] h-[20vh] mb-4 overflow-hidden relative bg-darknightblue bg-opacity-55 rounded-2xl'>
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
                     <div className='relative'>
                      <img src={image2} className='w-[70%] mt-8 ml-3'/>
                      <div className='absolute top-6 left-9'>
                        <h1 className='text-2xl mb-4 -ml-2 -mt-3 font-bold text-red'>AADI</h1>
                        <p className='bg-red text-sm p-1 -mt-2 text-white rounded-xl mb-8 font-semibold -ml-3'>Discount</p>
                        <h1 className='text-2xl font-bold text-red'>Sale</h1>
                      </div>
                     </div>
                      <img src={image3} className='scale-125 relative top-10 -left-4'/>
                  </div>
                </div>

                <p className=' text-lg font-semibold mb-2'>Recommended For You</p>
                <div><Card/></div>
                <div className='w-[100%] h-[10vh]'></div>
              </div>
          </div>
          <div><Navigation/></div>
        </div>
    </div>
  )
}

export default Home