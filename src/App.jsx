import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/form/Signin'
import Splash from './components/Splash'
import Register from './pages/form/Register'
import Signup from './pages/form/Signup'
import Verification from './components/Verification'
import Language from './components/Language'
import Welcome from './components/Welcome'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Myorder from './pages/Order/Myorder'
import Profile from './pages/Profile/Profile'


export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/verify' element={<Verification/>}/>
      <Route path='/language' element={<Language/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<Myorder/>}/>
      <Route path='/profile' element={<Profile/>}/>
     </Routes>
     <Splash/>
    </BrowserRouter>
  )
}
