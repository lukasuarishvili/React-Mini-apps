import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const main= document.getElementById("main")


createRoot(main).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
