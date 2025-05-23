import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ColorChanger from './colorChanger'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorChanger/> 
  </StrictMode>,
)
