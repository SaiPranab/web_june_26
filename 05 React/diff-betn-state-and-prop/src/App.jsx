import React, { useState } from 'react'
import Greet from './Greet'

const App = () => {
  console.log("App Component")
  const [name, setName] = useState("Ram")

  const handleClick = (e) => {
    setName(name + 1)
  }

  return (
    <div style={{border: '2px solid black', padding: '20px'}}>
      <p>Parent Component State:- {name}</p>

      <Greet name={name} />

      <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default App