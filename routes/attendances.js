const express = require('express');
const router = express.Router;
const attendances = require('../models/Attendances')

//==============Attendance Handling===================//

//Get all attendance records
router.get('/',function(req,res){
    Attendance.getAttendance(function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Get attendance record by ID
router.get('/:_id',function(req,res){
    Attendance.getAttendanceById(req.params._id,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Get Attendance records for a date 
router.get('/date/:date',function(req,res){
    Attendance.getAttendanceByDate(req.params.date,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Get attendance between two dates
router.get('/2date/:datefrom/:dateto',function(req,res){
    Attendance.getAttendanceByDate(req.params.datefrom,req.params.dateto,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Post attendance record for student by ID and course code
router.post('/',function(req,res){
    var record = req.body;
    Attendance.getAttendanceByDate(record,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

router.put('/:_id',function(req,res){
    var id = req.params.id;
    var record = req.body;
    Attendance.updateAttendanceRecord(id,record,{},function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

router.delete('/:_id',function(req,res){
    var id = req.params.id;
    Attendance.deleteAttendanceRecord(id,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

router.delete('/:_id/:date',function(req,res){
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
