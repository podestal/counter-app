import React from 'react';
import logo from './logo.svg';
import './App.css';

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
      <Counter />
    </div>
  );
}

export default App;
