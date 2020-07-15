const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendance')

//==============Attendance Handling===================//

//Get all attendance records
router.get('/',function(req,res){
    console.log(req.url);
    Attendance.getAttendance(function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Get attendance record by ID
router.get('/id/:_id',function(req,res){
    console.log(req.url);
    Attendance.getAttendanceById(req.params._id,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Get Attendance records for a date 
router.get('/date/:date',function(req,res){
    console.log(req.url);
    Attendance.getAttendanceByDate(req.params.date,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Get attendance between two dates
router.get('/2date/:datefrom/:dateto/:courseCode/:scannerID',function(req,res){
    Attendance.getAttendanceBetweenDates(req.params.courseCode,req.params.datefrom,req.params.dateto,req.params.scannerID,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Get attendance between two dates by ID
router.get('/2dateID/:datefrom/:dateto/:studentID/:scannerID',function(req,res){
    Attendance.getAttendanceBetweenDatesID(req.params.studentID,req.params.datefrom,req.params.dateto,req.params.scannerID,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Post attendance record for student by ID and course code
router.post('/',function(req,res){
    console.log(req.url);
    var record = req.body;
    Attendance.createAttendanceRecord(record,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Update Attendance Record by ID
router.put('/id/:_id',function(req,res){
    console.log(req.url);
    var record = req.body;
    Attendance.updateAttendanceRecord(_id,record,{},function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

router.delete('/id/:_id',function(req,res){
    console.log(req.url);
    Attendance.deleteAttendanceRecord(_id,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

router.delete('/:_id/:date',function(req,res){
    console.log(req.url);
    var id = req.params.id;
    var date = req.params.date;
    Attendance.deleteAttendanceRecordbyDate(id,date,
        function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

module.exports = router;

