import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Menu from './pages/Menu';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
