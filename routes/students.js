const express = require('express');
const router = express.Router;
const students = require('../models/Students')

//===================Student Handling=============================//

//Get all students
router.get('/api/students',function(req,res){
    Student.getStudents(function(err,students){
      if(err){
          throw err;
      }      
      res.json(students);
    });
});

//Get student by id
router.get('/api/students/:_id',function(req,res){
    Student.getStudentById(req.params._id,function(err,student){
      if(err){
          throw err;
      }      
      res.json(student);
    });
});

//Post a student
router.post('/api/students',function(req,res){
    var student = req.body;
    Student.addStudent(student,function(err,student){
      if(err){
          throw err;
      }  
      console.log(student)    
      res.json(student);
    });
});
