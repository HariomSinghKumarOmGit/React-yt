import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  
  function inc () {
    setNum(num+1)
  }
  function deinc () {
    setNum(num-1)
  }
  function re(){
    setNum(0)
  }
  function multiply(e){
    setNum(num * 5)
  }
  

  return (
    <div>
      <h1> {num} </h1>
      <button onClick={inc}>increase</button>
      <button onClick={deinc}>deincrease</button>
      <button onClick={re}>Reset</button>
      <button onClick={multiply} >multiply by 5 </button>

    </div>
  )
}

export default App
