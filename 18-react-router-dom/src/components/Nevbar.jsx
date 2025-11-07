import React from 'react'
import { Link } from 'react-router-dom'

const Nevbar = () => {
  return (
    <div>
      <div className='nev'>
        <h2>Thala</h2>
        <div>
            
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Nevbar
