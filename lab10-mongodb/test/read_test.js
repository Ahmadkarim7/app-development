//import
const assert = require('assert')
const Student = require('../src/students')
const { describe } = require('mocha')

describe('Read the data', function(){
    let student1, student2

    this.beforeEach(function(done){
        student1 = new Student({name: "Peter"})
        student2 = new Student({name: "Martha"})
        student1.save()
        student2.save()
        .then(function(){done()})
    })
    it('Find all student with name Martha', async()=>{
        const studnets = await Student.findOne({name:"Martha"})
        console.log(students)
        console.log(students._id)
    })
})