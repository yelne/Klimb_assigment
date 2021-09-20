// Requiring the module
const reader = require('xlsx')
const mongoose = require('mongoose');
const studentModel = require('./model')

const dbURL = "mongodb://localhost:27017/"
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', () => console.log('connected to database'))

const controller = {
    upload: async (req, res, next) => {
        // Reading our test file
        const file = reader.readFile(req.file.path)
        var sheet_name_list = file.SheetNames;
        var xlData = reader.utils.sheet_to_json(file.Sheets[sheet_name_list[0]]);
        xlData.forEach(async function (record) {
            await studentModel.create({
                name: record["Name of the Candidate"],
                email: record["Email"],
                mobile: record["Mobile No."],
                dateOfBirth: record["Date of Birth"],
                workExperience: record["Work Experience"],
                resumeTitle: record["Resume Title"],
                currentLocation: record["Current Location"],
                postalAddress: record["Postal Address"],
                currentEmployer: record["Current Employer"],
                currentDesignation: record["Current Designation"]
            })
        })
        res.send(xlData);
    }
}

module.exports = controller;