import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainRoutes from './Routes.jsx'
import './index.css'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainRoutes/>
  </StrictMode>,
)
