import React from 'react'

function Counter({title,count,place}) {
  // const {title,count} = props
  
  return (
    <div>
    
      <h1> {title} <span style={{color:'white'}}>{count} {place}</span></h1>     
    </div>
  )
}

export default Counter
