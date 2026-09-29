import { createContext, useState } from "react";

const WindowSizeContext = createContext()

export default function WindowSizeProvider({ children }) {
  const [windowSize, setWindowSize] = useState({
    width: innerWidth,
    height: innerHeight
  })

  return (
    <WindowSizeContext.Provider value={{ windowSize, setWindowSize }}>
      {children}
    </WindowSizeContext.Provider>
  )
}

export { WindowSizeContext }