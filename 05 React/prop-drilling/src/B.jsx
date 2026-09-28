import React, { useContext } from 'react'
import C from './C'
// import { MessageContext } from './main'

const B = () => {
  // const context = useContext(MessageContext)
  // console.log("////", context)

  return (
    <div style={{
      border: "2px solid green",
      padding: '20px'
    }}>
      B Component
      <C />
    </div>
  )
}

export default B