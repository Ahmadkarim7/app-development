//import assert assert is used to compare two boolean values
const assert = require("assert")
// import student schema
const Student = require('../src/students')

//describe function to push testing through Mocha
describe('Create the first data', function(){
    it('Save the student', function(){
        //create a new student
        const student1 = new Student ({name:"Martha"})

        //read and save the student in the database. Mongo will save the new student in the database
        student1.save()

        // check if the studnet is now new using the then method
        // id the studnets is new the promise reaches the fulfilled state will process to creat the schema for the new student
        .then(function(){
            assert(!student1.isNew)
        })
    })
})