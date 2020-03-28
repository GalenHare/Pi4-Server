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
router.get('/course/:_id',function(req,res){
    let current = new Date();
    Scanner.getCurrentCourse(id,current,function(err,record){
      if(err){
          throw err;
      }  
      console.log(record)    
      res.json(record.courseCode);
    });
});

module.exports = router;
