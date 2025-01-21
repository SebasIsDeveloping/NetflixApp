import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Film from './pages/Film/Film';
import '../src/Theme.css'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Film/:id" element={<Film />} />

      </Routes>
    </Router>

  )
}

export default App;
