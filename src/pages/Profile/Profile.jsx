import React from 'react'
import Navigation from '../../components/Navigation'
import { FaDollarSign, FaDoorOpen, FaEdit, FaHeart, FaShare, FaUser, FaUsers } from 'react-icons/fa'
import { MdHistory, MdHomeFilled } from 'react-icons/md'
import { FaBoxesPacking } from 'react-icons/fa6'

const Profile = () => {
  return (
     <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
        <div className='lg:w-[25%] md:w-[70%] bg-white relative w-full h-[100vh]'>
          <div className='w-[100%] h-[100vh] overflow-y-auto py-6'>
            {/* profile edit */}
            <div className='flex justify-center'>
              <div>
                <div className='flex justify-center'><button className='bg-darknightblue text-gray p-8 shadow-md bg-opacity-25 rounded-full mb-2 outline-none'><FaUser size={35}/></button></div>
                <p className=' font-bold text-gray text-xl text-center mb-6'>Beetie-kay</p>
              </div>
            </div>
             {/* profile edit */}

             <div className='px-4'>
              <p className='font-semibold text-sm '>Profile</p>
               <div className='flex items-center gap-2 border-b hover:opacity-40 border-gray py-4 mb-2'>
                <button className='bg-gray bg-opacity-20 rounded-xl text-darknightblue p-2'><FaEdit size={20}/></button>
                <p>Update Profile</p>
               </div>

               <p className='font-semibold text-sm'>My Payments</p>
               <div className='flex items-center gap-2 border-b hover:opacity-40 border-gray py-4 mb-2'>
                <button className='bg-gray bg-opacity-20 rounded-xl text-darknightblue p-2'><MdHomeFilled size={20}/></button>
                <p>Update Profile</p>
               </div>

               <div className='flex items-center gap-2 mb-2 hover:opacity-40'>
                 <button className='bg-gray bg-opacity-20 rounded-xl text-darknightblue p-2'><FaDollarSign size={20}/></button>
                 <p>Payments & Refunds</p>
               </div>

               <p className='font-semibold text-sm'>My Activities</p>

               <div className='flex items-center gap-2 border-b hover:opacity-40 border-gray py-4 mb-2'>
                <button className='bg-gray bg-opacity-20 rounded-xl text-darknightblue p-2'><MdHistory size={20}/></button>
                <p>All History</p>
               </div>

               <div className='flex items-center gap-2 border-b hover:opacity-40 border-gray py-4 mb-2'>
                <button className='bg-gray bg-opacity-20 rounded-xl text-darknightblue p-2'><FaBoxesPacking size={20}/></button>
                <p>Purchased Product</p>
               </div>

               <div className='flex items-center gap-2 border-b hover:opacity-40 border-gray py-4 mb-2'>
                <button className='bg-gray bg-opacity-20 rounded-xl text-darknightblue p-2'><FaHeart size={20}/></button>
                <p>Wishlisted Products</p>
               </div>

               <div className='flex items-center gap-2 border-b hover:opacity-40 border-gray py-4 mb-2'>
                <button className='bg-gray bg-opacity-20 rounded-xl text-darknightblue p-2'><FaShare size={20}/></button>
                <p>Shared Products</p>
               </div>

               <p className='font-semibold text-sm'>Others</p>

               <div className='flex items-center gap-2 border-b hover:opacity-40 border-gray py-4 mb-2'>
                <button className='bg-gray bg-opacity-20 rounded-xl text-darknightblue p-2'><FaUsers size={20}/></button>
                <p>Followers</p>
               </div>
               <div className='flex items-center gap-2 border-b hover:opacity-40 border-gray py-4 mb-2'>
                <button className='bg-gray bg-opacity-20 rounded-xl text-darknightblue p-2'><FaDoorOpen size={20}/></button>
                <p>All History</p>
               </div>
                <div className='w-[100%] h-20'></div>
             </div>
          </div>
          <div><Navigation/></div>
        </div>
    </div>
  )
}

export default Profile