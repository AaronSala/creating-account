
import './App.css';
import {useState ,useEffect} from 'react';

  

const App=() =>{
  //using react hook
  const[counter,setCounter] =useState(0);
  useEffect(()=>{
    
  })
  return (
    <div className="App">
      <button onClick={
        ()=>setCounter((prevCount)=>prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
    </div>
  );
}

export default App;
