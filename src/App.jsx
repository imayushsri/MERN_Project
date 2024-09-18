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
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/findjob' element={<h1>Find Job</h1>} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/contact' element={<h1>Contact</h1>} />
            {/* admin route */}
            <Route path='/admin' element={<h1>Admin Dashboard</h1>} />
            <Route path='/admin/login' element={<h1>Admin Login</h1>} />
            <Route path='/admin/update' element={<h1>Admin Profile Update</h1>} />

            {/* Seeker route */}
            <Route path='/seeker/register' element={<h1>Seeker Registration</h1>} />
            <Route path='/seeker/login' element={<h1>Seeker Login</h1>} />
            <Route path='/seeker' element={<h1>Seeker Dashboard</h1>} />
            <Route path='/seeker/jobapply' element={<h1>Seeker Job apply</h1>} />
            <Route path='/seeker/update' element={<h1>Seeker Profile update</h1>} />
            <Route path='/seeker/jobapplied' element={<h1>Seeker job applied</h1>} />

            {/* Recruiter route */}
            <Route path='/recruiter/register' element={<h1>Recruiter Register</h1>}/>
            <Route path='/recruiter/login' element={<h1>Recruiter Login</h1>}/>
            <Route path='/recruiter' element={<h1>Recruiter Dashboard</h1>}/>
            <Route path='/recruiter/jobpost' element={<h1>Recruiter job post</h1>}/>
            <Route path='/recruiter/appliedjob' element={<h1>Recruiter applied job</h1>}/>
            <Route path='/recruiter/update' element={<h1>Recruiter update profile</h1>}/>

            <Route path='*' element={<><h1>404 Page Not Found</h1></>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
