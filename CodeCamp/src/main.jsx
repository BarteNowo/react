import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Formularz from './Formularz.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formularz />
  </StrictMode>,
)
