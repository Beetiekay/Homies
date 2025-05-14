import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/form/Signin'
import Splash from './components/Splash'
import Register from './pages/form/Register'
import Signup from './pages/form/Signup'
import Verification from './components/Verification'
export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/verify' element={<Verification/>}/>
     </Routes>
     <Splash/>
    </BrowserRouter>
  )
}
