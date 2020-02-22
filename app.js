var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

var Student  = require('./models/students');
var Attendance  = require('./models/attendance');
//Connect to mongoose
mongoose.connect('mongodb://localhost/registrationDB', {useMongoClient:true});
var db = mongoose.connection;

app.get('/',function(req,res){
    res.send("Hello World");
});


//==============Attendance Handling===================//

//Get all attendance records
app.get('/api/attendance',function(req,res){
    Attendance.getAttendance(function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Get attendance record by ID
app.get('/api/attendance/:_id',function(req,res){
    Attendance.getAttendanceById(req.params._id,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Get Attendance records for a date 
app.get('/api/attendance/date/:date',function(req,res){
    Attendance.getAttendanceByDate(req.params.date,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Get attendance between two dates
app.get('/api/attendance/2date/:datefrom/:dateto',function(req,res){
    Attendance.getAttendanceByDate(req.params.datefrom,req.params.dateto,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

//Post attendance record for student by ID and course code
app.post('/api/attendance',function(req,res){
    var record = req.body;
    Attendance.getAttendanceByDate(record,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

app.put('/api/attendance/:_id',function(req,res){
    var id = req.params.id;
    var record = req.body;
    Attendance.updateAttendanceRecord(id,record,{},function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

app.delete('/api/attendance/:_id',function(req,res){
    var id = req.params.id;
    Attendance.deleteAttendanceRecord(id,function(err,attendance){
      if(err){
          throw err;
      }      
      res.json(attendance);
    });
});

app.delete('/api/attendance/:_id/:date',function(req,res){
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


app.get('/api/students',function(req,res){
    Student.getStudents(function(err,students){
      if(err){
          throw err;
      }      
      res.json(students);
    });
});

app.get('/api/students/:_id',function(req,res){
    Student.getStudentById(req.params._id,function(err,student){
      if(err){
          throw err;
      }      
      res.json(student);
    });
});

app.post('/api/students',function(req,res){
    var student = req.body;
    Student.addStudent(student,function(err,student){
      if(err){
          throw err;
      }  
      console.log(student)    
      res.json(student);
    });
});



// app.get('api/student/id/:id/fingerprint/:fingerpint',function(req,res){
//     var id = req.params.id;
//     var fingerprint = req.params.fingerprint;
//     Student.verifyStudent(id,fingerprint,function(err,student){
//         var id = req.params.id;
//         var date = req.params.date;
//         Attendance.deleteAttendanceRecordbyDate(id,date,
//             function(err,attendance){
//           if(err){
//               throw err;
//           }      
//           res.json(attendance);
//         });
//     })
// });



app.listen(3000);
console.log("Running on port 3000")
