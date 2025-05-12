import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/form/Signin'
import Splash from './components/Splash'
export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Signin/>}/>
     </Routes>
     <Splash/>
    </BrowserRouter>
  )
}
