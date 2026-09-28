import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MessageProvider from './context/MessageContext.jsx'

// const MessageContext = createContext()
createRoot(document.getElementById('root')).render(
  // <MessageContext.Provider value={"Hello Everyone"}>
  //   <App />
  // </MessageContext.Provider>

  <MessageProvider>
    <App />
  </MessageProvider>
)

// export { MessageContext };