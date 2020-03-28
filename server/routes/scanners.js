const express = require('express');
const router = express.Router();
const Scanner = require('../models/scanner')

//===================Scanner Handling=============================//

//Get all Scanners
router.get('/',function(req,res){
    Scanner.getStudents(function(err,scanner){
      if(err){
          throw err;
      }      
      res.json(scanner);
    });
});

//Get Scanner by id
router.get('/:_id',function(req,res){
    Scanner.getScannerById(req.params._id,function(err,scanner){
      if(err){
          throw err;
      }      
      res.json(scanner);
    });
});

//Post a Scanner
//To add a scanner send two date strings consisting of {day,startTime,endTime}
//After receiving this for ease of querying when it is stored in the database the time will be converted 
//into the amount of minutes that have passed since the day started
router.post('/',function(req,res){
    var body = req.body;
    Scanner.addScanner(body,function(err,scanner){
      if(err){
          throw err;
      }  
      console.log(scanner)    
      res.json(scanner);
    });
});

//Get course the scanner in question should be marking attendance for at this time
router.get('/course/:_id/:currentDate',function(req,res){
    let current = new Date(currentDate);
    Scanner.getCurrentCourse(_id,current,function(err,record){
      if(err){
          throw err;
      }  
      console.log(record)    
      res.json(record);
    });
});

module.exports = router;
