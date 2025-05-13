import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/form/Signin'
import Splash from './components/Splash'
import Register from './pages/form/Register'
export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/signin' element={<Signin/>}/>
     </Routes>
     <Splash/>
    </BrowserRouter>
  )
}
