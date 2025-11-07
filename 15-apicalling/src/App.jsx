import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(10)

  const aChanging = ()=>{
    console.log('A ke value change ho gya')
  }
  const bChanging = ()=>{
    console.log('B ke value change ho gya')
  }
  useEffect(()=>{
    aChanging()
  },[a])
  
  useEffect(()=>{
    bChanging()
  },[b])
    
  return (
    <div>
      <h1>A is {a}</h1> 
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button> <br /> <br />
      <button onClick={()=>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App



























/*

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(110)
  

  useEffect(()=>{
    console.log('use effect is running......')
  },[num])


  return (
    <div>
      <h3>num 1 is {num}</h3>
      <h3>num 2 is {num2}</h3>
      <button onMouseEnter={()=>{
        setNum(num+1 )
      }}
      onMouseLeave={()=>{
        setNum2(num2+200 )
        
      }}>click</button>
    </div>
  )
}

export default App


*/






















/*

import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const getData = async() => {
    const responce = await axios.get('https://picsum.photos/v2/list')

    setData(responce.data);
  }


  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map((elem, idx)=>{
          return <h3>hello, {elem.author}  {idx} </h3>
        })}
      </div>
    </div>
  )
}

export default App






*/


















// import axios from 'axios'

// const App = () => {

//   const getData = async() => {
//     const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

//    console.log(data);
   
//   }



//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   )
// }

// export default App
