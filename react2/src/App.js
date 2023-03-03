
import './App.css';
import {useState} from 'react';
const Person = (props)=>{
  return (
    <>
    <h1>name: {props.name}</h1>
    <h2>lastName: {props.lastName}</h2>
    <h3>age:{props.age}</h3>
    </>
  )
}
  

const App=() =>{
 
  return (
    <div className="App">
      <Person name='john' lastName='bled' age={ 34 }/>
      <Person name='mwende' lastName='mulwa'/>
      <Person />
    </div>
  );
}

export default App;
