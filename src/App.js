import './App.css';
import Counter2 from './components/Counter2';
import { useState } from 'react';


function App() {
  const [state,setState]=useState(false);
//   const [count,setCount] = useState(0)
//   const addCount=()=>{
//     setCount(count+1)
//   }
//   const subCount=()=>{
//     setCount(count-1)
//   }
//   const mulCount=()=>{
//     setCount(count*count)
//   }

//   let counter ={
//     title : 'First Counter',
//     count ,
//     place :'Spread Operator used'
//   }

//   let student =[{name:'Printo',age:22},
//   {name:'Prinu',age:26},
//   {name:'Lachu',age:23}
// ]

  
//   return (
//     <>
//     <div className="App"> 
//     <h1>Counter</h1>
//      <Counter title='First counter' count={count} />
//       <Counter {...counter}/>   {/* spreadOperator is '...' */}
//      <Counter title='Second counter' count={count} />

//      <button onClick={addCount} >Add + 1</button> 
//      <button onClick={subCount} >Sub - 1</button>
//      <button onClick={mulCount} >Mul * {count}</button>
      
//       <h1>Student Data</h1>

//       { 
//         student.map((obj,index)=>
//           (
//         // <Student key={index} name={obj.name} age={obj.age}/> with return function
//         <Student key={index} {...obj}/>          //without return function
//         )
// ) 

//       }
//     </div>
//    </>
//   );
return(
<>
  <button onClick={()=>setState(!state)}>Show/Hide </button>  
{ state && <Counter2 /> }
   
</>
)


}

export default App;


