const express = require('express');
const router = express.Router();
const Scanner = require('../models/scanner')

//===================Scanner Handling=============================//

//Get all Scanners
router.get('/',function(req,res){
    Scanner.getScanners(function(err,scanner){
      if(err){
          throw err;
      }      
      res.json(scanner);
    });
});

//Get Scanner by id
router.get('/id/:_id',function(req,res){
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
    console.log(body);
    startMinute = parseInt(body.startHour) *60 + parseInt(body.startMinute);
    endMinute = parseInt(body.endHour) *60 + parseInt(body.endMinute);
    var scanner = {"scannerID":body.scannerID,"day":body.day,"startMinute":startMinute,"endMinute":endMinute,"courseCode":body.courseCode};
    console.log(scanner);
      Scanner.addScanner(scanner,function(err,record){
        if(err){
            throw err;
        }  
        console.log(record)    
        res.json(record);
      });
});

//Get course the scanner in question should be marking attendance for at this time
router.get('/course',function(req,res){
    console.log(req.query.currentDate);
    console.log(typeof(req.query.currentDate))
    let current = new Date(req.query.currentDate);
    console.log(current);
    var hour = current.getHours();
    var mins = current.getMinutes() + (hour * 60);
    console.log(mins);
    var day = current.getDay();
    console.log(day)
    Scanner.getCurrentCourse(req.query._id,current,function(err,record){
      if(err){
          throw err;
      }  
      console.log(record)    
      res.json(record);
    });
});

router.delete('/',function(req,res){
  var body = req.body;
  console.log(body);
  startMinute = parseInt(body.startHour) *60 + parseInt(body.startMinute);
  endMinute = parseInt(body.endHour) *60 + parseInt(body.endMinute);
  var scanner = {"scannerID":body.scannerID,"day":body.day,"startMinute":startMinute,"endMinute":endMinute,"courseCode":body.courseCode};
  console.log(scanner);
    Scanner.deleteScanner(scanner,function(err,record){
      if(err){
          throw err;
      }  
      console.log(record)    
      res.json(record);
    });
});

module.exports = router;
