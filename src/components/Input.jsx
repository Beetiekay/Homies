import React from 'react'

const Input = ({ ...props }) => {
  return (
    <div>
     <input {...props} className=' p-2 py-2 outline-none rounded-lg w-full border-2 border-darknightblue text-darknightblue'/>
    </div>
  )
}

export default Input