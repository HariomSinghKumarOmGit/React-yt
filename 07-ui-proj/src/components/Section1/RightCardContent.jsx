import React from 'react'

const RightCardContent = (elem) => {
  return (
    <div>
      
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between  z-10'>

        <h2 className=' text-2xl font-semibold  bg-white rounded-full h-10 w-10 flex justify-center items-center'> {elem.id+1}</h2>
        <div>
            <p className='text-lg leading-normal text-white mb-10'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto asperiores facere ad nemo, quaerat exercitationem.
            </p>
            <div className='flex flex-row justify-between'>
                <button  style={{backgroundColor: elem.color}} className='  text-white font-semibold px-8 py-3 rounded-full'>{elem.tag}</button>
                <button style={{backgroundColor: elem.color}} className='  text-white font-semibold px-4 py-3 rounded-full  '><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default RightCardContent
