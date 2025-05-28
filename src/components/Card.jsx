import React, { useState } from 'react'
import data from './Data'

const Card = () => {
  const [filter, setFilter] = useState('');
  
     const searchText = (event) =>{
       setFilter(event.target.value);
     }
    let dataSearch = data.cardData.filter(item =>{
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
    });
  return (
    <div className='grid grid-cols-3 gap-3'>
       {dataSearch.map((item, index) =>{
         return(
         <div >
          <div className='hover:bg-opacity-30 mb-2 p-2 rounded-lg bg-darknightblue hover:scale-110'>
              <button className='p-3 bg-red bg-opacity-30 rounded-2xl'><img src={item.img} /></button>
              <div className='w-[100%]'>
               <h1 className='text-xs font-bold text-white w-screen'>{item.title}</h1>
               <p className='opacity-75 text-white font-semibold text-xs dark:opacity-40'>{item.pharagh}</p>
               </div>
               <div className=''>
                 <div className='relative flex text-white items-center gap-1'>
                 <h1 className='text-xs text-white font-semibold'>$ {item.price}</h1>/
                 <h2 className='text-sm text-white'> {item.brief}</h2>
                 </div>
                <button className='bg-whitegray rounded-xl p-1 text-white'><h3 className='text-[12px] font-semibold text-darknightblue'>{item.free}</h3></button> 
               </div>
              </div>  
              </div>
            )
          })}
    </div>
  )
}

export default Card