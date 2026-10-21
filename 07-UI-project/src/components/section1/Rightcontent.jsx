import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='p-6 h-full gap-10 overflow-x-auto rounded-4xl flex flex-nowrap h-full w-2/3  ' >
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx}img={elem.img} tag={elem.tag}/>
      })}
      
    
      
    </div>
  )
}

export default Rightcontent
