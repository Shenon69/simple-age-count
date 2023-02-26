import React from 'react';
import { useState } from 'react';
import './NameAndAge.css';

function NameAndAge() {

    const [age,setAge] = useState(() => {
        return 0;
    })
 
    const incAge = () => {
        setAge(prevCount => prevCount+1);
    }

    const decAge = () => {
        setAge(prevCount => prevCount-1);
    }

    const resetAge = () => {
        setAge(0);
    }


  return (
    <div>
        <h1>Set My Age :)</h1>
        <h3>Hello My age is { age }</h3>
        <button onClick={decAge}>-</button>
        <button onClick={resetAge}>0</button>
        <button onClick={incAge}>+</button> 
        
    </div>
  )
}

export default NameAndAge