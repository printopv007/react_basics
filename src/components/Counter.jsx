import React from 'react'

function Counter({title,count,place}) {
  // const {title,count} = props
  
  return (
    <div>
    
      <h4> {title} <span style={{color:'blueviolet'}}>{count} {place}</span></h4>     

    </div>
  )
}

export default Counter
