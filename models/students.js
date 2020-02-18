var mongoose = require('mongoose');


//Students Schema
var studentSchema = mongoose.Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    fingerprint:{
        type:String,
        unique:true,
    }
})

var Student = module.exports = mongoose.model('Student',studentSchema);

//get all students 
module.exports.getStudents = function(callback, limit){
    Student.find(callback).limit(limit);
}

//get a student by ID
module.exports.getStudentById = function(id,callback){
    Student.findOne({studentID:id},callback);
}

//get a student by first name
module.exports.getStudentByFName = function(name,callback){
    Student.findOne({fName:name},callback);
}

//get a student by lastname
module.exports.getStudentByLName = function(name,callback){
    Student.findOne({lName:name},callback);
}

//get a student by wholename
module.exports.getStudentByName = function(name,callback){
    var i = name.split(" ");
    Student.findOne({fName:i[0],lName:i[1]},callback);
}

//add a student
module.exports.addStudent = function(student,callback){
    Student.create(student,callback);
}

//add a student
module.exports.verifyStudent = function(id,fingerprint,callback){
    Student.findOne({studentID:id,fingerprint:fingerprint},callback);
}

