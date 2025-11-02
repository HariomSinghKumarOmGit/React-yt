import React from 'react'

const App = () => {

  const onSubmited = (e)=>{
    e.preventDefault();
    console.log('Form submitted');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        onSubmited(e);
      }}>
        <input type="text" placeholder="Enter u'r name" id="" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
