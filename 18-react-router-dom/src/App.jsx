import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import Nevbar from './components/Nevbar'
import Product from './pages/Product'

const App = () => {
  return (
    <div className='world'>
      {/* Nev bar is there is above rute but data will lode in rutes */}
      <Nevbar/>
      {/* Hair u have to give specific rute to each page thats imp */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>} />
        
      </Routes>
    </div>
  )
}

export default App
