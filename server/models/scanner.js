var mongoose = require('mongoose');


//Students Schema
var scannerSchema = mongoose.Schema({
    scannerID:{
        type:String,
        required:true,
        unique:true
    },
    day:{
        type:Number,
        required:true
    },
    //Amount of minutes passed since the start of the day
    startMinute:{
        type:Number,
        required:true
    },
    //Amount of minutes passed since the start of the day
    endMinute:{
        type:Number,
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
    //TODO: Add check for if fields not provided
    Scanner.create(scanner,callback);
}

//Each scanner will request the current course which should be sent with each attendance record from this collection
//This function will find the relevant course to send
//At whatever time the request is made the currentCourse at that time as well as the end time for that course will be sent
module.exports.getCurrentCourse = function(scannerID,currentTime,callback){
        var hour = currentTime.getHours();
        var day = currentTime.getDay();
        var mins = currentTime.getMinutes() + (hour * 60);
        Scanner.find({scannerID:scannerID, day:day,startMinute:{"$lte":mins},endMinute:{"$gt":mins}},callback)   
}
