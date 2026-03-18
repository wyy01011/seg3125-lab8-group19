import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Footer from "./footer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx"
import Contact from "./Contact.jsx"
import BrowseSingers from "./BrowseSingers"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} /> {/*Homepage is the first one loaded.*/} 
        <Route path="/contact" element={<Contact />} />
        <Route path="/browse" element={<BrowseSingers />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
