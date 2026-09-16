import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { RouterProvider } from 'react-router'
import router from './routes/AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  // <App />
  <RouterProvider router={router} />
)
