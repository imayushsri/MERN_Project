const express = require('express');
const adminRoute = express.Router();  //Extract router from express
const { adminTable } = require('../models/adminModel');
const { seekerTable } = require('../models/seekerModel')
const { recruiterTable } = require('../models/recruiterModel')

// insert data
adminRoute.post('/admin-register', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const image = req.files.image;

    //Move file to uploads
    await image.mv('uploads/' + image.name, (err) => {
        if (err) {
            res.send(err);
        }
    });

    // Store data
    const data = new adminTable({ name, email, password, image: image.name });
    const result = await data.save();

    //send respose in json
    res.json({
        code: 200,
        data: result
    });
});

// Login
adminRoute.post('/admin-login', async (req, res) => {
    const { email, password } = req.body;
    const result = await adminTable.findOne({ email, password })
    if (result) {
        res.json({
            code: 200,
            message: 'Login Successfull',
            data: result
        })
    }
    else {
        res.json({
            code: 404,
            message: 'Invalid Email or Password',
            data: []
        })
    }
});

//Seeker List
adminRoute.get('/admin-seekerlist', async (req, res) => {
    try {
        const result = await seekerTable.find();
        res.json({
            code: 200,
            message: 'Data Found',
            data: result
        })
    } catch (error) {
        res.json({
            code: 404,
            message: error
        })
    }
})

//Export module
module.exports = { adminRoute }