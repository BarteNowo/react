import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Kino from './Kino.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kino />
  </StrictMode>,
)
