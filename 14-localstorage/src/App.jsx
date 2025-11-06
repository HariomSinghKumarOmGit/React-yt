import React from 'react'

const App = () => {

  const user = {
    username: 'Shayar',
    age: 24,
    city: 'Dholakpur'
  }

  localStorage.setItem('user',JSON.stringify(user))
  console.log(user) 
  return (
    <div>
      App
    </div>
  )
}

export default App
