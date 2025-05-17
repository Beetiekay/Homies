import React from 'react'
import Navigation from '../../components/Navigation'

const Home = () => {
  return (
    <div className='w-full flex justify-center bg-kleinblue fixed top-0'>
        <div className='lg:w-[25%] md:w-[70%] bg-white relative w-full h-[100vh]'>
          home
          <div><Navigation/></div>
        </div>
    </div>
  )
}

export default Home