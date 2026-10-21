import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full bg-opacity-50 p-10 flex flex-col justify-between'>
    <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-bold text-black'>{props.id+1}</h2>
    <div>
        <p className='text-white mg-10 text-lg leading-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde molestiae voluptatibus aperiam facilis voluptatum nam!</p>
        <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full '>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full '><i className='ri-arrow-right-line'></i></button>
        </div>
    </div>
    </div>
  )
}

export default RightCardContent
