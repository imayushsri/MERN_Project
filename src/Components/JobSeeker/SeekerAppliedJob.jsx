import axios from 'axios';
import React, { useEffect, useState } from 'react'
const SeekerAppliedJob = () => {
    const [dataId, setDataId] = useState("");
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        const tempData = JSON.parse(localStorage.getItem('data'));
        setDataId(tempData._id);
        getData();
        // console.log(tempData._id, 'temp');
    }, [dataId]);
    // console.log(dataId, 'did')
    const getData = async () => {
        const tempData = JSON.parse(localStorage.getItem('data'));
        const payload ={
            userId : tempData._id
        }
        const response = await axios.post('http://localhost:8000/api/seeker-applied', payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.data.code == 200) {
            setJobData(response.data.data);
        }
    }

  return (
    <>
      <div className="container my-3">
                
                {jobData.map((el) => {
                    return (
                        <div className="card p-3 mb-3 postedjob_card">
                        <div className="row d-flex justify-content-center align-items-center">
                            {/* Logo Column */}
                            <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <img src={`http://localhost:8000/upload/${el.logo}`} alt="Company Logo" className="img-fluid bg-dark" style={{ maxHeight: '100px' }} />
                            </div>

                            {/* Company Name, Job Title, and Job Type Column */}
                            <div className="col-md-3 d-flex justify-content-start flex-column my-3">
                                <h5 className='postedjob_h'> {el.name}</h5>
                                <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobTitle}</span></div>
                                <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobType}</span></div>
                            </div>

                            {/* Job Category, Location, and Salary Column */}
                            <div className="col-md-3">
                                <div className='postedjob_p2 mb-2'>Category: <span className='postedjob_p1'> {el.category}</span></div>
                                <div className='postedjob_p2 mb-2'>Location: <span className='postedjob_p1'> {el.jobLocation}</span></div>
                                <div className='postedjob_p2 mb-2'>Salary: <span className='postedjob_p1'> {el.salary}</span></div>
                            </div>

                            {/* Apply Date and Vacancies Column */}
                            <div className="col-md-3">
                                <div className='postedjob_p2 mb-2'>Vacancies: <span className='postedjob_p1'> {el.vacancies}</span></div>
                                <div className='postedjob_p2 mb-2'>Apply By: <span className='postedjob_p1'> {el.applyDate}</span></div>
                                {/* <input className='form_button mt-3' onClick={()=>handleApply(el)} type='submit' value='APPLY NOW' style={{width:'150px', fontSize:"0.8em"}}/> */}
                            </div>
                        </div>
                        </div>
                    )
                })}
            
        </div>
    </>
  )
}

export default SeekerAppliedJob
