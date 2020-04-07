const express = require('express');
const router = express.Router();
const Student = require('../models/student')

//===================Student Handling=============================//

//Get all students
router.get('/',function(req,res){
    Student.getStudents(function(err,students){
      if(err){
          throw err;
      }      
      res.json(students);
    });
});

//Get student by id
router.get('/id/:_id',function(req,res){
    Student.getStudentById(req.params._id,function(err,student){
      if(err){
          throw err;
      }      
      res.json(student);
    });
});

//Post a student
router.post('/',function(req,res){
    var student = req.body;
    Student.addStudent(student,function(err,student){
      if(err){
          throw err;
      }  
      console.log(student)    
      res.json(student);
    });
});


module.exports = router;
