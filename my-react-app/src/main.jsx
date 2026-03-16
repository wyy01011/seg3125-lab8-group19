import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BrowseSingers from "./BrowseSingers";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      
      <BrowseSingers />
    </>
  </StrictMode>,
)
