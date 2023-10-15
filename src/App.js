import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  const addCount=()=>{
    setCount(count+1)
  }
  const subCount=()=>{
    setCount(count-1)
  }
  const mulCount=()=>{
    setCount(count*count)
  }
  const resetCount =()=>{
    setCount(count*0)
  }

  // let counter ={
  //   title : 'First Counter',
  //   count ,
  //   place :'Spread Operator used'
  // }

//   let student =[{name:'Printo',age:22},
//   {name:'Prinu',age:26},
//   {name:'Lachu',age:23}
// ]

  
  return (
    <>
    
    <div className="App" style={{textAlign:'center'}}> 
    <br/>
    <h1>Counter Project</h1>
     <Counter title= ' Increment Counter' count={count} />
      {/* <Counter {...counter}/>   spreadOperator is '...' */}
     {/* <Counter title='Second counter' count={count} /> */}

     <button  onClick={addCount} >Add + 1</button> 
     <button onClick={subCount} >Sub - 1</button>
     <button  onClick={mulCount} >Mul * {count}</button>
     <button  onClick={resetCount} >Reset</button>
      
    </div>
   </>
  );
// return(
// <>
//   {/* <button onClick={()=>setState(!state)}>Show/Hide </button>  
// { state && <Counter2 /> } */}
//    {/* <Counter2/>
//    <Counter/> */}

// </>
// )


}

export default App;


