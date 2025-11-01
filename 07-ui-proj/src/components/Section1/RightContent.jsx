import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='p-6 h-full w-2/3 flex flex-row  overflow-auto'>
        <div className='flex flex-row gap-10'>
          {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} />
          })}
        </div>
    </div>
  )
}

export default RightContent
