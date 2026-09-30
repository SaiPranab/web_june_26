import { useEffect, useState } from "react"

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: innerWidth,
    height: innerHeight
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        width: innerWidth,
        height: innerHeight
      })
    })
  }, [])

  return windowSize
}