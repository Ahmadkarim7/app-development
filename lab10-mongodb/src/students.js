// import mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema is a blueprint that outline how data is organized and stored

//config the schema
const StudentSchema = new Schema ({name: String})

//create the schema model for each student
const Student = mongoose.model('student', StudentSchema)

//export the schema model
module.exports = Student