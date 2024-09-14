import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/LandingPage/Navbar';
import Home from './Components/LandingPage/Home';

const App = () => {
  return (
    <>
    <div className="container-fluid">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/findjob' element={<h1>Find Job</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/contact' element={<h1>Contact</h1>} />
          <Route path='*' element={<><h1>404 Page Not Found</h1></>} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App;
