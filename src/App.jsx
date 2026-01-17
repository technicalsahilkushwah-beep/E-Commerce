import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Sign from './Components/Sign'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<> <Nav/> <Home/>  <Sign/> <Footer/> </>}/>
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default App