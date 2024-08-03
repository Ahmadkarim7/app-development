console.log('-------Example 1: global object, console-------')
console.log('Welcome to nodejs by Ahmad Adil Karim')
console.warn('Warning! The file might be corrupted')
console.error('SYNTAX ERROR! check spelling')
console.error('Trace error in line')

console.log('-------Example 2: global object, timer-------')
setTimeout(()=>{console.warn('Time is over')}, 3000)

let count = 9;
const timer = setInterval(()=>{
    console.log(`Counting ${count}`)
    count -= 1
    if (count == 0){
        clearInterval(timer)
    }
},2000)

console.log('-------Example 3: check or print directory or file-------')
console.log(`Current directory ${__dirname}`)
console.log(`Current file ${__filename}`)

console.log('-------Example 4 : working with different module-------')
//import moduele
const name = require('./mod')

console.log(name.helper("Martha"))
console.log(name.id(123))
console.log(name.email('ahmadadilkarim@gmail.com'))

console.log('-------Example 5 : node js event module-------')
//import the nodejs module events
const events = require('events')
//use constructoe new to create an object of events
const eventEmitter = new events.EventEmitter()

eventEmitter.on('test', function(e){
    console.log(e)
})

eventEmitter.emit('test', 'EVENT EMITTERS IN NODEJS')

console.log('-------Example 6 : read file in nodejs-------')
const fs = require('fs')
fs.readFile('readmore.txt', 'utf-8', function(error, data){
    console.log(data)
    console.log(`Error = ${error}`)
})

console.log('-------Example 7 : write file in nodejs-------')
let info = "This file has three names : \n1. Bruce\n2. Peter\n3. Jason"
fs.writeFile('readmore.txt', info, function(error){
    if(error){
        console.log(error)
    }
})

console.log('-------Example 8 : append data into an existing file in node.js-------')
fs.appendFile("user_emails.txt", info, function(error){
    if(error){console.log(error)}
})

console.log('-------Example 9: remove file in node.js-------')
fs.unlink('user_emails.txt', function(error){
    if(error){console.log(error)}
})

console.log('-------Example 10: create file in node.js-------')
// write file, append file  and open file
fs.open('newfile.txt', 'w', function(err){
    if(err){console.log(err)}
    else{console.log('File saved!')}
})

console.log('-------Example 11: create directory-------')
fs.mkdirSync('new_directory')