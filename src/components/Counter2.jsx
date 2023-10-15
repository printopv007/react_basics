import React,{useState,useEffect} from 'react'

function Counter2() {
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)

       useEffect(()=>{
        console.log('Mounting...');
        console.log('Updating count1...'+count);
        console.log('Updating count2...'+count2);
        return ()=>{
            console.log('Clean up..'+count);
        }
    },[count,count2])
     
  return (
    <div>
        <button onClick={()=>setCount(count+1)} >Increment Count Here</button>
        <h1> Increment Counter No 1: {count} </h1>

        <button onClick={()=>setCount2(count2+1)} >Increment Count Here</button>
        <h1> Increment Counter No 2:  {count2} </h1>

    </div>
  )
}

export default Counter2
