import React from 'react'
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
const App = () => {
const users=[
  {img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    tag:'Satisfied'
  },
  {img:'https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    tag:'Underserved'
  },
  {img:'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    tag:'Underbanked'
  }
]

// all data inside app.jsx and pass it to section1 and section2 as props d
//data upr se niche flow hota h 
  return (
    <div >
      <Section1 users={users} />
     
      <Section2 />
    </div>
  )
}

export default App
