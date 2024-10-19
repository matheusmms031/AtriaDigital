import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeComponent from './pages/HomeComponent.jsx'
import Home from "./pages/Home.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
