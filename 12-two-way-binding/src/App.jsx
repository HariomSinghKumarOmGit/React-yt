import React, { useState } from 'react'

const App = () => {
  

  const [title, setTitle] = useState('')
  const onSubmited = (e)=>{
    e.preventDefault();
    console.log('Form submitted by', title);

     setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        onSubmited(e);
      }}>
        <input 
        type="text" 
        placeholder="Enter u'r name" 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
