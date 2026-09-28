import React, { useContext } from 'react'
import { MessageContext } from './context/MessageContext'

const C = () => {
  const message = useContext(MessageContext)

  return (
    <div style={{
      border: "2px solid blue",
      padding: '20px'
    }}>
      C Component
      <br />
      message is {message}
    </div>
  )
}

export default C