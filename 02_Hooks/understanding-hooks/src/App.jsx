import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0) //useState(default value of const[0] and const[1] is the function responsible to update const[0])


  const addValue = () => {
    counter += 1
    setCounter(counter)
  }
  const removeValue = () => {
    counter -= 1
    setCounter(counter)
  }

  return (
    <>
      <h1>Simple Heading</h1>
      <h2>Counter Value: {counter}</h2> 

      <button onClick={addValue}> Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )// Counter is still stuck because variable already turned to 0 and when variable changes to 1, there's no change in text since the role of variable is already done
  // Main purpose of React to change all counter with change in variable in the UI. UI Updation. We use {useState} from 'react'
}

export default App
