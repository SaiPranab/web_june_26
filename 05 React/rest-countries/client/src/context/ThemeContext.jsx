import { createContext, useState } from "react";

const ThemeContext = createContext()

export default function ThemeProvider({children}) {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark') ?? false))

  return (
    <ThemeContext.Provider value={ {isDark, setIsDark} }>
      { children }
    </ThemeContext.Provider>
  )
}

export { ThemeContext }