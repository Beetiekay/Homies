import React from 'react'

const Button = ({label, onclick}) => {
  return (
    <button onClick={onclick} className=' w-full py-5 bg-darknightblue text-whitegray hover:scale-95 hover:opacity-60 text-sm  rounded-lg'>
      {label}
    </button>
  )
}

export default Button