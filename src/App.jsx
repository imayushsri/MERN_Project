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
import PostedJob from './Components/Recruiter/RecruiterAppliedJob';
import AdminUpdate from './Components/Admin/AdminUpdate';
import JobSeekerApply from './Components/JobSeeker/JobSeekerApply';
import SeekerAppliedJob from './Components/JobSeeker/SeekerAppliedJob';
import RecruiterAppliedJob from './Components/Recruiter/RecruiterAppliedJob';

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
            <Route path='/admin' element={<AdminUpdate/>} />
            <Route path='/admin/login' element={<AdminLogin/>} />
            <Route path='/admin/update' element={<><h1>updates</h1></>} />
            <Route path='/admin/seekerlist' element={<SeekerList/>} />
            <Route path='/admin/recruiterlist' element={<RecruiterList/>} />

            {/* Seeker route */}
            <Route path='/seeker/register' element={<JobseekerRegister/>} />
            <Route path='/seeker/login' element={<SeekerLogin/>} />
            <Route path='/seeker' element={<h1>Seeker Dashboard</h1>} />
            <Route path='/seeker/jobapply' element={<JobSeekerApply/>} />
            <Route path='/seeker/update' element={<JobSeekerUpdate/>} />
            <Route path='/seeker/jobapplied' element={<SeekerAppliedJob/>} />

            {/* Recruiter route */}
            <Route path='/recruiter/register' element={<RecruiterRegister/>}/>
            <Route path='/recruiter/login' element={<RecruiterLogin/>}/>
            <Route path='/recruiter' element={<RecruiterUpdate/>}/>
            <Route path='/recruiter/jobpost' element={<Postjob/>}/>
            <Route path='/recruiter/postedjob' element={<RecruiterPostedJobs/>}/>
            <Route path='/recruiter/appliedjob' element={<RecruiterAppliedJob/>}/>
            <Route path='/recruiter/appliedjob' element={<RecruiterAppliedJob/>}/>
            {/* <Route path='/recruiter/update' element={}/> */}

            <Route path='*' element={<><h1>404 Page Not Found</h1></>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
