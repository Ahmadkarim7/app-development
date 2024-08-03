//import mongos
const mongoose = require('mongoose')

//connect to mongoDB where studentsname is data base
mongoose.connect("mongodb://localhost/student's-list")

//check if it is connected
mongoose.connection
    // use .once to watch for mongoo=DB to connect first when the event occoured
    .once('open', function(){console.log('\n----Connected to MongoDB----\n')})
    //use on to watch for error in connection
    .on('error', function(e){console.log('Error Connecting'), e})

    //clear all collections form the students document
    beforeEach(function(done){
        mongoose.connection.collections.students.drop()
        done()
    })