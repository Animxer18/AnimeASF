import React from 'react'

import Home from './Home'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
        <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    
  )
}

export default App
