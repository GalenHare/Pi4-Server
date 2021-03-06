var express = require ('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors')
app.use(cors());
app.use(express.json());

//Connect to mongoose
mongoose.connect('mongodb://localhost/registrationDB',{ useNewUrlParser: true ,useUnifiedTopology: true});
var db = mongoose.connection;



app.use('/api/attendance',require('./routes/attendances'));
app.use('/api/student',require('./routes/students'));
app.use('/api/fingerprint',require('./routes/fingerprints'));
app.use('/api/scanner',require('./routes/scanners'));
app.use('/api/courses',require('./routes/courses'));
app.get('/',function(req,res){
    res.send("Hello World");
});


app.listen(5000);
console.log("Running on port 5000")
