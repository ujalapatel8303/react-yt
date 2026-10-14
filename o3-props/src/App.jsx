import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Alice' age={25} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQom4SwIpgRHRLe5qpMHq5sTjctpnnYpuFvcbmUVx5s984K2eGLLnP3A9g&s='/>
      <Card user='Bob' age={30} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36ldG79j0IuLRj6f5QcCjc4MkINKjrGrvhq8YCqwjRQ&s='/>
      <Card user='Charlie' age={35} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmgh2WJU-60FY0ySnD9pYrFaTM8Jv3f2Cp1jwxxPn0A&s=10'/>
    </div>
  )
}

export default App
