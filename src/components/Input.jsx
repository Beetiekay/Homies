import React from 'react'

const Input = ({ ...props }) => {
  return (
    <div>
     <input {...props} className=' p-2 py-3 rounded-lg w-full border border-b-darknightblue text-darknightblue'/>
    </div>
  )
}

export default Input