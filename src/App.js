import React from 'react';
import logo from './logo.svg';
import './App.css';

const VisibilityToggle = () => {

  let [visibility, setVisibility] = React.useState(false)

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{visibility ? "Hide details" : "Show details"}</button>
      {visibility && <p>Hey, these are some details you can see now</p>}
    </div>
  )
}

const Counter = () => {

  let [count, setCount] = React.useState(0)

  const handleAddOne = () => {
    setCount(count += 1)
  }

  const handleMinusOne = () => {
    setCount(count -= 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Count</h1>
      <p>{count}</p>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={handleMinusOne}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

function App() {
  return (
    <div>
      {/* <Counter /> */}
      <VisibilityToggle />
    </div>
  );
}

export default App;
