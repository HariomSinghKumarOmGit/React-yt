import React from 'react'
import LeftContent from './leftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-16 pt-6 flex items-center gap-10 justify-between h-[90vh]  px-10'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content