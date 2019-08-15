const mongoose = require('mongoose');

// Edu Schema
const EduSchema = mongoose.Schema({

    schoolname: String,
    level: String,
    diploma: String,
    startingDate: String,
    endingDate: String,
    logo: String,
    town: String,
    state: String,
    country: String,
    url: String,
    classes: Array,
    projects: Array,
    gpa: String

});

const Edu = module.exports = mongoose.model('Edu', EduSchema);

//Get All Education in DB
module.exports.listEdus = function(callback){
    Edu.find({}, null, {sort: '-endingDate'}, callback);
}
