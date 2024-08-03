//import libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//create an app using express
const app = express()

//use the body parse middleware to handle data sent in the body of HTTP
app.use(bodyParser.json())
//use expres to server static files. Any files in the public folder will be accessable from the root URL of the webserver
app.use(express.static('public'))
// use express body-parser for parsing URL-encoded request bodies(typically from HTML forms)
app.use(bodyParser.urlencoded({extended: true}))

// connect to the database using mongoose
mongoose.connect('mongodb://localhost/userlogin', {useNewUrlParser: true, useUnifiedTopology: true})

//check connection
mongoose.connection
.once('open', function(){console.log('Connected to userlogin database')})
.on('error', function(e){console.log('Error connecting...', e)})

//create checking page
app.get('/', function(request, response){
    response.redirect('index.html')
}).listen(3000)

//posting the form 
app.post('/login', async (request, response)=> {
    try{
        //get the data from html form
        const username = request.body.username
        const password = parseInt(request.body.password)

        
        //testing 
        console.log(`Entered username = ${username} and entered password = ${password}`)
        

        //get data from database, MongoDB, and check if information username pasword matches

const user = await mongoose.connection.db.collection('users').findOne({ username: username})


      
            if(!user){
               return response.send('Information does not match')
            }
            if (user.password === password){
                return response.send('Successfully log in')
            }
            else{
                return response.send('Password does not match')
            }
    } catch(error){
        response.status(500).send('Internel server Error')

    }
})
//create login page
app.get('/', function(request, response){
    response.redirect('index.html')
}).listen(3001)