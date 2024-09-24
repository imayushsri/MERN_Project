const express = require('express');
const seekerRoute = express.Router();  //Extract router from express
const { seekerTable } = require('../models/seekerModel');
const { jobPostTable } = require('../models/jobpost');
const { recruiterTable } = require('../models/recruiterModel');

// insert data
seekerRoute.post('/seeker-register', async (req, res) => {
    const { name, email, contact, password, location, qualification, jobPreference } = req.body;
    let image = req.files.image;
    let resume = req.files.resume;

    //Move file to uploads
    await image.mv('uploads/' + image.name, (err) => {
        if (err) {
            res.send(err);
        }
    });

    await resume.mv('uploads/' + resume.name, (err) => {
        if (err) {
            res.send(err);
        }
    });

    // Store data
    const data = new seekerTable({ name, email, contact, password, location, qualification, jobPreference, image: image.name, resume: resume.name });
    const result = await data.save();

    //send respose in json
    res.json({
        code: 200,
        data: result
    });
});

// Login
seekerRoute.post('/seeker-login', async(req,res)=>{
    const {email, password} = req.body;
    const result = await seekerTable.findOne({email, password})
    if(result){
        res.json({
            code: 200,
            message: 'Login Successfull',
            data : result
        })
    }
    else{
        res.json({
            code: 404,
            message: 'Invalid Email or Password',
            data: []
        })
    }
});

//All Jobs list
seekerRoute.get('/seeker-joblist', async(req,res)=>{
    const jobPost = await jobPostTable.find();
    const finalData = await Promise.all(  //store all data that need in frontend
    jobPost.map(async(item)=>{
    const companyDetails = await recruiterTable.findOne({_id:item.companyId});  //store recruites table dets
    
        // return all data that need in frontend
            return{
                _id: item?._id,  // ? is handelling null value
                companyId:item?.companyId,
                category: item?.category,
                jobType: item?.jobType,
                experience: item?.experience,
                jobLocation: item?.jobLocation,
                jobTitle: item?.jobTitle,
                applyDate: item?.applyDate,
                salary: item?.salary,
                vacancies: item?.vacancies,
                logo: companyDetails?.logo,
                name: companyDetails?.name
            }
        })
    )
    res.json({
        code: 200,
        message: 'Data Found!',
        data: finalData
    })
    })


//Export module
module.exports = { seekerRoute }