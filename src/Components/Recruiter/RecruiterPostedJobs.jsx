import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { FaLocationDot } from 'react-icons/fa6'

const RecruiterPostedJobs = () => {

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
        const payload = {
            companyId: dataId  // working
        }
        const response = await axios.post('http://localhost:8000/api/recruiter-postedjob', payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.data.code == 200) {
            setJobData(response.data.data);
        }
        // console.log(dataId, '1111111111111111');
    }

    return (
        <>
            <div className="recentjob my-4">
                <h3 className="tc_h2 mb-3">POSTED JOB</h3>
                {
                    jobData.map((el) => {
                       return (
                        <div className="posted_job mb-3">
                        <div className="postedjob_logo">
                          <img src={`http://localhost:8000/upload/${el.logo}`} className="company_logo" />
                        </div>
                        <div className="postedjob_info">
                        <div className="postedjob_field me-4">
                          <div className="postedjob_fields postedjob_h">{el.name}</div>
                          <div className="postedjob_fields postedjob_p1">{el.jobTitle}</div>
                          <div className="postedjob_fields postedjob_p2">{el.jobType}</div>
                          </div>
                          <div className="postedjob_field ms-0 me-4">
                          <div className="postedjob_fields postedjob_p2">Category: {el.category}</div>
                          <div className="postedjob_fields postedjob_p2">Location: {el.jobLocation}</div>
                          <div className="postedjob_fields postedjob_p1">Salary: {el.salary}</div>
                          </div>
                          <div className="postedjob_field me-4">
                          <div className="postedjob_fields postedjob_p2">Vacancies: {el.vacancies}</div>
                          <div className="postedjob_fields postedjob_p2">Apply By: {el.applyDate}</div>
                          </div>
                        </div>
                      </div>
                        )
                    })


                }
            </div>
        </>
    )
}

export default RecruiterPostedJobs
