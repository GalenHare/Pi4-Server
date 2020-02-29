var mongoose = require('mongoose');


//Fingerprint Schema
var fingerprintSchema = mongoose.Schema({
    studentID:{
        type:String,
        required:true
    },
    fingerprint:{
        type:String,
        required:true
    }
});

var Fingerprint = module.exports = mongoose.model('Fingerprint',fingerprintSchema);

//get all fingerprints 
module.exports.getFingerprints = function(callback, limit){
    Fingerprint.find(callback).limit(limit);
}

//get a fingerprint by ID
module.exports.getFingeprintById = function(id,callback){
    Fingerprint.findOne({studentID:id},callback);
}

//add a fingerprint
module.exports.addFingerprint = function(fingerprint,callback){
    //TODO
    //Can't add more than 5 fingerprints 
    Fingerprint.create(fingerprint,callback);
}

//Verify a fingerprint
module.exports.verifyFingerprint = function(data,callback){
    Fingerprint.find({studentID:data.studentID},callback);
}

module.exports.verify = function (goal,fingerprints){
    var i;
    var sum; 
    var result;
    goal = formatFingerprint(goal);
    fingerprints.forEach((each) => {
        current = formatFingerprint(each.fingerprint);
        i = 0;
        sum = 0;
        result = [];
        for(i=0; i<goal.length;i++){
            result[i] = Math.abs(parseInt(goal[i],10) - parseInt(current[i],10));
            sum = sum + Math.abs(parseInt(goal[i],10) - parseInt(current[i],10));
        }
    });

    return [sum,result];
}

function formatFingerprint(i){
    var temp = i.split(", ");
    temp[0] = temp[0].split("[")[1];
    temp[temp.length-1] = temp[temp.length-1].split("]")[0];
    return temp;
}

