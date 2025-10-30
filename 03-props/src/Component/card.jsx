import React from 'react'

export const Card = (prop) => {
    console.log(prop);
  return (
  
      <div className='card'>
        <img src={prop.img} alt="" />
        <h1>{prop.user}, {prop.age}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, libero.</p>
        <button>View profile</button>
      </div>
   
  )
}

export default Card
