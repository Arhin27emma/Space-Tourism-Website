import React, { useState } from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Home component={Home}/>
    </Router>
  )
}

export default App
