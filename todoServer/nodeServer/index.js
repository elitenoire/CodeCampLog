//Express server framework
const express = require('express');
//node file system to read files
const path = require('path');
//npm package to retrieve data from the body of a http request
const bodyParser = require('body-parser');
//Express application
const app = express();

// app.use((req, res, next) => { //middleware to add function between request and response
//     console.log(`Time is ${Date.now()}`);
//     next();
// })

//Initialize app to run on port 3000
app.listen(3000, function () {
    console.log('Your express server is now running on port 3000');
})

//Create new middleware function to serve files from root directory
app.use(express.static(path.join(__dirname, '../../todoApp')));
//parse form submission
app.use(bodyParser.urlencoded({
    extended: false
}))
//parses json http request
app.use(bodyParser.json())

//Route handlers - callback function with request and response objects
//NOT IN USE because of the express.static method
app.get('/', function (req, res) { //handler for home page
    console.log('Someone just came home');
    // res.send('Welcome Home!');
    res.sendFile(path.join(__dirname, '../../todoApp/index.html'));

})
//************NOT WORKING */
// app.get('/script/app.js',(res,req)=> {
//     res.sendFile(path.join(__dirname, '../../todoApp/script/app.js'));
// })

// app.get('/css/style.css',(res,req)=> {
//     res.sendFile(path.join(__dirname, '../../todoApp/css/style.css'));
// })
//************************** */

app.get('/profile', (req, res) => {
    console.log('Someone visited your profile');
    res.send('Welcome to Profile');
})

//**************HANDLE CLIENT DATA HERE************************* */
// A global array to store all todos
var todos = [];

//Create a todo object using input from form
function createTodo(task) {
    return {
        activity: task,
        id: 'x' + Math.random(),
        created: Date(),
        completed: false,
    }
}
//-----------------Handle Endpoints here---------------------->
//Endpoint to handle each todo input submission
app.post('/submitform', (req, res) => {
    var $todoTask = req.body.todo;
    todos.unshift(createTodo($todoTask));
    return res.json({todos});
})
//Endpoint to handle rendering request from todo app
app.get('/gettodos', (req, res) => {
    return res.json({todos});
})
//Endpoint to toggle checked state of each todo
app.get('/toggle/:id', (req, res) => {
    let $id = req.params.id;
    todos = todos.map(todo => {
        if (todo.id === $id) {
            todo.completed = !todo.completed}
        return todo;
    });
    return res.json({todos});
})
//Endpoint to delete todos
app.get('/deltodo/:id', (req,res)=> {
    let $id = req.params.id;
    todos = todos.filter(todo => todo.id !== $id);
    return res.json({todos});
})
//Endpoint to update/make changes to a todo
app.post('/edittodo', (req,res)=> {
    let $id = req.body.$id;
    let $value = req.body.$value;
    todos = todos.map(todo => {
            if (todo.id === $id) {
                todo.activity = $value;
                todo.created = Date();}
            return todo;
        })
    return res.json({todos})
})
//**************************************************************** */

// app.get('/*',(req,res)=> {//Redirect any other route to profile page
//     console.log('Redirecting to profile...')
//     res.redirect('/profile');
// })
