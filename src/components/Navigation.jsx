import React from 'react'
import {MdHome} from "react-icons/md"
import {FaBox, FaShoppingCart, FaUser} from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom'



const Navigation = () => {
    let {pathname} = useLocation()
       let subpage = pathname.split('/')?.[1]
    
       function Links (type = null){
          let classes = 'p-2 rounded-2xl'
          if(subpage === ''){
            subpage ="home"
          }
    
          if(type === subpage){
            classes += "p-4 text-kleinblue  animate-bounce scale-125 rounded-full text-white relative -top-3 bg-darknightblue  "
          }else{
            classes += "p-4  opacity-40   outline-none text-kleinblue"
          }
          return classes
       }
  return (
    <div className='w-full bg-whitegray px-8 py-1 shadow-md fixed left-0 right-0 bottom-0'>
        <ul className='flex justify-between   mb-2'>
            <li>
            <Link to={"/home"}>
              <button className={Links('home')}><MdHome size={25}/></button>
              <p className='font-semibold opacity-75 text-sm text-darknightblue text-center'>Home</p>
            </Link>
            </li>

            <li>
            <Link to={"/cart"}>
              <button className={Links('cart')}><FaShoppingCart size={25}/></button>
              <p className='font-semibold opacity-75 text-sm text-darknightblue text-center'>Cart</p>
            </Link>
            </li>

            <li>
            <Link to={"/order"}>
             <div className='flex justify-center'><button className={Links('order')}><FaBox size={25}/></button></div>
              <p className='font-semibold opacity-75 text-sm text-darknightblue text-center'>My Order</p>
            </Link>
            </li>

            <li>
            <Link to={"/profile"}>
              <button className={Links('profile')}><FaUser size={25}/></button>
              <p className='font-semibold opacity-75 text-sm  text-darknightblue text-center'>Profile</p>
            </Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Navigation