import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnimalList from './AnimalList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimalList />
  </StrictMode>,
)