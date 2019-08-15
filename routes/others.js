const express = require('express')
const router = express.Router();
const Other = require('../models/other');

//Get All Other topics
router.get('/', (req,res, next)=>{

    Other.listOthers((err, results)=>{
        if(err) throw err;
        else{
            return res.json({success: true, results});
        }
    });
});

module.exports = router;