import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='overflow-hidden relative h-full w-80 rounded-4xl shrink-0 mg-10  '>
      <img className='h-full w-full object-cover ' src={props.img} alt='' />
        <RightCardContent id={props.id} tag={props.tag}/>
        
    </div>
  )
}

export default RightCard
