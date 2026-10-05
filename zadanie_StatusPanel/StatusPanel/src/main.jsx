import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StatusPanel from './StatusPanel.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StatusPanel />
  </StrictMode>,
)
