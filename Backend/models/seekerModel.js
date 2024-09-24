const mongoose = require('mongoose');

//Create Schema
const seekerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    qualification: { type: String, required: true },
    jobPreference: { type: String, required: true },
    image: { type: String, required: true },
    resume: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

const seekerTable = mongoose.model('seekers', seekerSchema);

module.exports = { seekerTable };