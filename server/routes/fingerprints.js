const express = require('express');
const router = express.Router();
const Fingerprint = require('../models/fingerprint')

//===================Fingerprint Handling=============================//

//Get all fingerprints
router.get('/',function(req,res){
    Fingerprint.getFingerprints(function(err,fingerprints){
      if(err){
          throw err;
      }      
      res.json(fingerprints);
    });
});

//Get fingerprints by id
router.get('/:_id',function(req,res){
    Fingerprint.getFingerprintById(req.params._id,function(err,fingerprint){
      if(err){
          throw err;
      }      
      res.json(fingerprint);
    });
});

//Post a student
router.post('/',function(req,res){
    var data = req.body;
    console.log(data);
      Fingerprint.addFingerprint(data,function(err,fingerprint){
        if(err){  
            throw err;
        }  
        console.log(fingerprint)    
        res.json(fingerprint);
      });
});

//Post a student
router.post('/search',function(req,res){
  var data = req.body;
  console.log(data);
  Fingerprint.verifyFingerprint(data,function(err,fingerprints){
    if(err){
      throw err;
    }
    var result = Fingerprint.verify(data.fingerprint,fingerprints);
    console.log(result);
    res.json(result);
  });
});

module.exports = router;

