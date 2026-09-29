import Header from './components/Header'
import './App.css'
import { Outlet } from 'react-router'
import ThemeProvider from './context/ThemeContext'
import WindowSizeProvider from './context/windowSizeContext'

const App = () => {
  return (
    <ThemeProvider>
      <WindowSizeProvider>
        <Header />
        <Outlet />
      </WindowSizeProvider>
    </ThemeProvider>
  )
}

export default App