import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    
      <div className="card">
        <img src={props.img} alt="user" />
          <h1>{props.user}</h1>
          <p>Age: {props.age}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>view profile</button>
      </div>
    
  )
}

export default Card
