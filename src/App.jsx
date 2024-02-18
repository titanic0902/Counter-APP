import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
 // let counter = 5
  const addValue = () =>{
   // console.log("Clicked",counter)
    counter = counter+1 ;
    setCounter(counter)

  }
  const RemoveValue= () =>{
    // console.log("Clicked",counter)
     counter = counter-1;
     setCounter(counter)
 
   }
 

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={RemoveValue}>Remove Value {counter}</button>

    </>
  )
}

export default App
