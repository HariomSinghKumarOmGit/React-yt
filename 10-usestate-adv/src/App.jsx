import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Aarav', age:20})

  const btnCed = ()=>{
    const newNum = {...num}
    newNum.user = 'Sanjay';
    newNum.age =32;
    setNum (newNum)
  }

  return (
    <div>
      <h1> {num.user}, {num.age} </h1>
      <button onClick={btnCed}>clicks</button>
    </div>
  )
}

export default App
