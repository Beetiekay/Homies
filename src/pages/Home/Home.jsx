import React from 'react'
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
    <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
        <div  className='lg:w-[25%] md:w-[70%] py-8 bg-white relative w-full h-[100vh]'>
          <div data-aos="fade-up" className='w-full h-[100vh] px-3'>
            <div className='flex justify-around gap-3 mb-6'>
              <div className='flex items-center gap-2 px-2 py-2 bg-whitegray rounded-3xl shadow-md'>
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

              <div className='w-20 h-20 border-red bg-opacity-50 bg-darknightblue hover:scale-95 flex justify-center items-center rounded-full border'>
                <h1 className='text-lg font-bold'>SONY</h1>
              </div>

              <div className='w-20 h-20 border-red bg-opacity-50 bg-darknightblue relative overflow-hidden hover:scale-95  flex justify-center items-center rounded-full border'>
                <img src={round1} className='w-14'/>
              </div>

              <div className='w-20 h-20 bg-opacity-50 border-red bg-darknightblue relative overflow-hidden hover:scale-95  flex justify-center items-center rounded-full border'>
                <img src={round2} className='w-14'/>
              </div>

              <div className='w-20 h-20 bg-opacity-50 bg-darknightblue border-red relative overflow-hidden hover:scale-95  flex justify-center items-center rounded-full border'>
                <img src={round3} className='w-14'/>
              </div>

             
             </div>
              
              <div>
                <div data-aos="zoom-in" className='w-[100%] h-[20vh] mb-4 overflow-hidden relative bg-red bg-opacity-55 rounded-2xl'>
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
              </div>
          </div>
          <div><Navigation/></div>
        </div>
    </div>
  )
}

export default Home