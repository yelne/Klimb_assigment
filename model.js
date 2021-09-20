const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, Required: 'Name of Candidate cannot be left blank.' },
    email: { type: String, Required: 'Email cannot be left blank.' },
    mobile: { type: String },
    dateOfBirth: { type: String },
    workExperience: { type: String },
    resumeTitle: { type: String },
    currentLocation: { type: String },
    postalAddress: { type: String },
    currentEmployer: { type: String },
    currentDesignation: { type: String }
});

module.exports = mongoose.model('Students', studentSchema);