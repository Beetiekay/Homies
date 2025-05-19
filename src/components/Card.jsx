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
          <div className='hover:bg-opacity-30 mb-2 p-2 rounded-lg'>
              <button className='p-3 bg-darknightblue bg-opacity-30 rounded-2xl'><img src={item.img} /></button>
              <div className='w-[100%]'>
               <h1 className='text-xs font-bold w-screen'>{item.title}</h1>
               <p className='text-sm opacity-75 font-semibold dark:opacity-40'>{item.pharagh}</p>
               </div>
               <div className=''>
                 <div className='relative flex items-center gap-1'>
                 <h1 className='text-sm'>$ {item.price}</h1>/
                 <h2 className='text-sm'> {item.brief}</h2>
                 </div>
                 <h3 className='font-bold hover:translate-x-2 text-xs text-darknightblue'>{item.free}</h3>
               </div>
              </div>  
              </div>
            )
          })}
    </div>
  )
}

export default Card