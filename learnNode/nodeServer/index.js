//Express server framework
const express = require('express');
//node file system to read files
const path = require('path');
//Express application
const app = express();

app.use((req,res,next)=> {//middleware to add function between request and response
    console.log(`Time is ${Date.now()}`);
    next();
})
//Create new middleware function to serve files from root directory
app.use(express.static(path.join(__dirname, '../../myToDo')));

//Route handlers - callback function with request and response objects
//NOT IN USE because of the express.static method
app.get('/', function(req,res){//handler for home page
    console.log('Someone just came home');
    // res.send('Welcome Home!');
    res.sendFile(path.join(__dirname, '../../myToDo/index.html'));

})
//************NOT WORKING */
// app.get('/script/app.js',(res,req)=> {
//     res.sendFile(path.join(__dirname, '../../myToDo/script/app.js'));
// })

// app.get('/css/style.css',(res,req)=> {
//     res.sendFile(path.join(__dirname, '../../myToDo/css/style.css'));
// })
//************************** */

app.get('/profile',(req,res)=> {
    console.log('Someone visited your profile');
    res.send('Welcome to Profile');
})

// app.get('/*',(req,res)=> {//Redirect any other route to profile page
//     console.log('Redirecting to profile...')
//     res.redirect('/profile');
// })
//Initialize app to run on port 3000
app.listen(3000,function(){
    console.log('Your express server is now running on port 3000');
})
