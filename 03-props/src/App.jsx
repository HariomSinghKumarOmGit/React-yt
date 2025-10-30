import React from 'react'
import {Card} from './Component/card'


const App = () => {

  
  return (
    <div className='parent'>
      <Card user='Hariom' age='19' img='https://images.unsplash.com/photo-1733837305574-9a8b96c08d5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974'/>
      <Card user='Aarav' age='29'  img='https://images.unsplash.com/photo-1760434685862-5f2b29748cb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974'/>
      <Card user='Ajay' age='18'   img='https://images.unsplash.com/photo-1738959869828-5084901ff8e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2832'/>
      <Card user='Aanand' age='21' img='https://images.unsplash.com/photo-1761198204843-7c947910c647?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1015'/>
      <Card user='Suraj' age='25'  img='https://images.unsplash.com/photo-1761197641747-2803ee4145ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1015'/>
    </div>
  )
}

export default App
