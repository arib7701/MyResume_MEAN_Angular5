const mongoose = require('mongoose');

//Other Schema
const OtherSchema = mongoose.Schema ({
    name: String,
    startingDate: String,
    logo: String,
    pics: Array,
    description: String,
    skills: Array
});

const Other = module.exports = mongoose.model('Other', OtherSchema);

//Get All Others topics in DB
module.exports.listOthers = function(callback){
    Other.find({}, callback);
}