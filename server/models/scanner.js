var mongoose = require('mongoose');


//Students Schema
var scannerSchema = mongoose.Schema({
    scannerID:{
        type:String,
        required:true,
        unique:true
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    courseCode:{
        type:String,
        required:true
    }
});

var Scanner = module.exports = mongoose.model('Scanner',scannerSchema);

//get all scanners
module.exports.getScanners = function(callback, limit){
    Scanner.find(callback).limit(limit);
}

//get a scanner by ID
module.exports.getScannerById = function(id,callback){
    Scanner.find({scannerID:id},callback);
}

//add a scanner
module.exports.addScanner = function(scanner,callback){
    Scanner.create(scanner,callback);
}

//Each scanner will request the current course which should be sent with each attendance record from this collection
//This function will find the relevant course to send
//At whatever time the request is made the currentCourse at that time as well as the end time for that course will be sent
module.exports.getCurrentCourse = function(scannerID,currentTime,callback){
        Scanner.find({scannerID:scannerID, startTime:{"$lte":currentTime},endTime:{"$gt":currentTime}},callback)   
}
