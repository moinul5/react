import './App.css'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState({
    count: 0,
    prevCount: 0
  })

  const addValue = ()=> {
    setCounter(prev=> ({
      prevCount : prev.prevCount,
      count: prev.prevCount + 1
    }))
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Previous Counter value: {counter.prevCount} </h2>
      <h2>Counter value: {counter.count} </h2>
      <button onClick={addValue}>Add value: {counter.count}</button>
    </>
  )
}

export default App
