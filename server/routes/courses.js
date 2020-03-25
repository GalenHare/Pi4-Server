const express = require('express');
const router = express.Router();
const Course = require('../models/course')

//===================Course Handling=============================//

//Get all courses
router.get('/',function(req,res){
     Course.getCourses(function(err,course){
      if(err){
          throw err;
      }      
      res.json(course);
    });
});

//Get course by id
router.get('/:_id',function(req,res){
    Course.getCourseById(req.params._id,function(err,course){
      if(err){
          throw err;
      }      
      res.json(course);
    });
});

//Post a course
router.post('/',function(req,res){
    var course = req.body;
    Course.addCourse(course,function(err,course){
      if(err){
          throw err;
      }  
      console.log(course)    
      res.json(course);
    });
});

module.exports = router;
