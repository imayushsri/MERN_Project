//imports
const express = require('express');
const mongoose = require('mongoose');  // stabilish connectivity to database
const cors = require('cors');
const expressFileupload = require('express-fileupload');
const {recruiterRoute} = require('./routes/recruiterRoute'); // use it after db connection
const {seekerRoute} =  require('./routes/seekerRoute');
const {adminRoute} = require('./routes/adminRoute')

// Instances
const app = express();
app.use(express.json()) //Accept JSON data 
app.use(cors());   // CORS
app.use(expressFileupload()); // enable file uploads
app.use('/upload', express.static('./backend/uploads'));  // to access files on frontend
// access - http://localhost:port/uploads/fileName.extension


//Database connectivity
const Dbconnect = async () => {
    const con = await mongoose.connect('mongodb://localhost:27017/recruitex');
    if (con) {
        console.log('Connected to MongoDB');
    }
}
Dbconnect();

app.use('/api',recruiterRoute);
app.use('/api',seekerRoute);
app.use('/api',adminRoute);


app.listen(8000, () => {
    console.log("Server is running on port - 8000");
})