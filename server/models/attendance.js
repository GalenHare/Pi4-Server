var mongoose = require('mongoose');


//Students Schema
var attendanceSchema = mongoose.Schema({
    studentID:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    courseCode:{
        type:String,
        required:true
    }
})

var Attendance = module.exports = mongoose.model('Attendance',attendanceSchema);

//get all students 
module.exports.getAttendance = function(callback, limit){
    Attendance.find(callback).limit(limit);
}

//get attendance records by ID
module.exports.getAttendanceById = function(id,callback, limit){
    Attendance.find({studentID:id},callback).limit(limit);
}

//create attendance records for a student
module.exports.createAttendanceRecord = function(record,callback){
    Attendance.create(record,callback);
}

//get attendance records for a certain date
module.exports.getAttendanceByDate = function(date,callback,limit){
    Attendance.find({date:date},callback).limit(limit);
}

//get attendance records between two dates
module.exports.getAttendanceByDate = function(datefrom,dateto,callback,limit){
    Attendance.find({date:date},callback).limit(limit);
}

//update attendance records by student ID
module.exports.updateAttendanceRecord = function(id,attendanceR,options,callback){
    var query = {studentID:id};
    var update = {
        date : attendanceR.date
    }
    Student.findOneAndUpdate(query,update,options);
}

//delete attendance records by student ID
module.exports.deleteAttendanceRecord = function(id,callback){
    Student.deleteMany({id:id},callback);
}

//delete attendance records by student ID and date
module.exports.deleteAttendanceRecordbyDate = function(id,date,callback){
    Student.deleteMany({id:id, date:date},callback);
}

