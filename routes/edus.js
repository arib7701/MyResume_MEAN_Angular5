const express = require('express');
const Edu = require('../models/edu');
const router = express.Router();

//Get All Education
router.get('/', (req, res, next) =>{

    Edu.listEdus((err, results)=>{
        if(err) throw err;
        else{
            return res.json({success: true, results});
        }
    });

});

module.exports = router;