import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/LandingPage/Navbar';
import Home from './Components/LandingPage/Home';
import RecruiterRegister from './Components/Recruiter/RecruiterRegister';
import JobseekerRegister from './Components/JobSeeker/JobseekerRegister';
import RecruiterLogin from './Components/Recruiter/RecruiterLogin';
import SeekerLogin from './Components/JobSeeker/SeekerLogin';
import AdminLogin from './Components/Admin/AdminLogin';
import Footer from './Components/LandingPage/Footer';
import Postjob from './Components/Recruiter/Postjob';
import SeekerList from './Components/Admin/SeekerList';
import RecruiterList from './Components/Admin/RecruiterList';
import RecruiterPostedJobs from './Components/Recruiter/RecruiterPostedJobs';
import RecruiterUpdate from './Components/Recruiter/RecruiterUpdate';
import JobSeekerUpdate from './Components/JobSeeker/JobSeekerUpdate';

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
            <Route path='/admin/login' element={<AdminLogin/>} />
            <Route path='/admin/update' element={<h1>Admin Profile Update</h1>} />
            <Route path='/admin/seekerlist' element={<SeekerList/>} />
            <Route path='/admin/recruiterlist' element={<RecruiterList/>} />

            {/* Seeker route */}
            <Route path='/seeker/register' element={<JobseekerRegister/>} />
            <Route path='/seeker/login' element={<SeekerLogin/>} />
            <Route path='/seeker' element={<h1>Seeker Dashboard</h1>} />
            <Route path='/seeker/jobapply' element={<h1>Seeker Job apply</h1>} />
            <Route path='/seeker/update' element={<JobSeekerUpdate/>} />
            <Route path='/seeker/jobapplied' element={<h1>Seeker job applied</h1>} />

            {/* Recruiter route */}
            <Route path='/recruiter/register' element={<RecruiterRegister/>}/>
            <Route path='/recruiter/login' element={<RecruiterLogin/>}/>
            <Route path='/recruiter' element={<RecruiterPostedJobs/>}/>
            <Route path='/recruiter/jobpost' element={<Postjob/>}/>
            <Route path='/recruiter/appliedjob' element={<h1>Recruiter applied job</h1>}/>
            <Route path='/recruiter/update' element={<RecruiterUpdate/>}/>

            <Route path='*' element={<><h1>404 Page Not Found</h1></>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
