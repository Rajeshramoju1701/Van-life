import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import VansList from './Components/VansList'
import VanDetails from './Components/VanDetails'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import "../server"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="container">
          <div className="nav-elements">
            <h1><Link to="/">#VANLIFE</Link></h1>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/vans">Vans</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<VansList />} />
        <Route path='/vans/:id' element = {<VanDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
