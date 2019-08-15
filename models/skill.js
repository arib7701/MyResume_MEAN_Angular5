const mongoose = require('mongoose');

//Skill Schema
const SkillSchema = mongoose.Schema ({
    type: String,
    subtype: String,
    name: String,
    level: String
});

const Skill = module.exports = mongoose.model('Skill', SkillSchema);

//Get All Skills in DB
module.exports.listSkills = function(callback){
    Skill.find({}, callback);
}
