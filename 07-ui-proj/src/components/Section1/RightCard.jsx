import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (elem) => {
  return ( 
    <div className=' h-165 overflow-hidden shrink-0 relative w-80 bg-amber-500 rounded-4xl'>
     <img className='h-full w-full object-cover' src={elem.img} alt="" />

     <RightCardContent id={elem.id} tag={elem.tag} color={elem.color} />

    </div>
    
  )
}

export default RightCard
