const express = require('express');
const Skill = require('../models/skill');
const router = express.Router();

//Get All Skills
router.get('/', (req, res, next) =>{

    Skill.listSkills((err, results)=>{
        if(err) throw err;
        else{
            return res.json({success: true, results});
        }
    });

});

module.exports = router;