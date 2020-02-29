var mongoose = require('mongoose');


//Students Schema
var courseSchema = mongoose.Schema({
    courseCode:{
        type:String,
        required:true,
        unique:true
    },
    courseName:{
        type:String,
        required:true
    }
});

var Course = module.exports = mongoose.model('Course',courseSchema);

//get all courses
module.exports.getCourses = function(callback, limit){
    Course.find(callback).limit(limit);
}

//get a course by ID
module.exports.getCourseById = function(id,callback){
    Course.findOne({courseCode:id},callback);
}

//get a course by name
module.exports.getCourseByName = function(name,callback){
    Course.findOne({courseName:name},callback);
}

//add a course
module.exports.addStudent = function(course,callback){
    Course.create(course,callback);
}

