import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
