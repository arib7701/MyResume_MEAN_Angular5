const mongoose = require('mongoose');

// Work Schema
const WorkSchema = mongoose.Schema({
    name: String,
    company: String,
    startingDate: String,
    endingDate: String,
    logo: String,
    town: String,
    state: String,
    country: String,
    urls: Array,
    descriptions: Array,
    hours: Number,
    technologies: Array,
    skills: Array
});

const Work = module.exports = mongoose.model('Work', WorkSchema);

//List Works in DB
module.exports.listWorks = function(callback){
    Work.find({}, null, {sort: '-startingDate'}, callback);
}

//Get Work By ID
module.exports.getWorkById = function(id, callback){
    const myId = JSON.parse('"'+id+'"');
    Work.findById({'_id': mongoose.Types.ObjectId(myId)}, callback);
}
