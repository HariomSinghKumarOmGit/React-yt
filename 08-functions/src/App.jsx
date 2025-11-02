import React from 'react'

const App = () => {
  const btnClicked = ()=>{
    console.log('button is clicked')
  }
  return (

    <div>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
