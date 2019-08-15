const express = require('express');
const router = express.Router();
const Work = require('../models/work');

//Get All Works
router.get('/', (req, res, next) =>{
 
    Work.listWorks((err, results) => {
         if(err) throw err;
         else{
             return res.json({success: true, results});
         }
    });
 });

//Get Work By Id
router.get('/:workId', (req, res, next) =>{

    Work.getWorkById(req.params.workId, (err, result) => {
        if(err) throw err;
        if(!result){
            return res.json({success: false, msg:'Not found'});
        }
        else{
            return res.json({success: true, result});
        }
    });
});

module.exports = router;