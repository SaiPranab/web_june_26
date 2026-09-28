import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const MessageContext = createContext()

createRoot(document.getElementById('root')).render(
  <MessageContext.Provider value={["Hiiii", 10, "Hello"]}>
    <App />
  </MessageContext.Provider>
)

export { MessageContext };