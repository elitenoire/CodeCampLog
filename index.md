### Wednesday, 28th June 2017

* Practised touch typing - **_Home row keys_**.
* Revisted the DOM, used functions to handle events.
* Learnt the basics of Git - **init**, **add**, **commit** and **push**.
* Created my first Git repo and pushed remotely to GitHub.
* Started using markdown syntax *.md

### Thursday, 29th June 2017

* Did few sass challenges on FCC.
* Researched a bit on Bulma css framework.
* Attempted recreating my portfolio website using Bulma, later abandoned.
* Worked on the "About Me" section of my portfolio website.
* Finished the "About Me" section and pushed to repo.
* Now working on the next section - "Work".

### Friday, 30th June 2017

* Finished the "Work" section and pushed to github.
* Spent 5 mins on Touch Typing in the morning.
* Learnt the basics of Bootstrap.
* Bootstrap grid layout - rows and columns for responsive design.
* Official inauguration of Code Camp 2017 members
* Received a compliment on my porfolio website from one of the speakers - Mr Ebuka.
* Received an intro to CSS Flexbox, centered a single column in a row.
* **//TODO** Start on DOM manipulation using JQuery

### Saturday, 1st July 2017

* Oops, no practise today!

### Sunday, 2nd July 2017

* Still practised home row keys , touch typing.
* Completed the Bootstrap and jQuery section on FCC.
* Watched some youtube tutorials on jQuery.

### Monday, 3rd July 2017

* practised touch typing - e & i.
* DOM manipulation using javascript
* created a [simple birthday display](../master/inClass/03-07-17/form.html) with plain js
  * has a simple form with name and birth date input
  * used the ```preventDefault()``` method to prevent default submission of the form.
  * added an ```addEventListener()``` method to call ```showBirthday()``` function on submit event.
  * the users birthday is displayed using the form input in the ```innerHTML()``` method.
* Learning jQUery in class. edited [simple birthday display](../master/inClass/03-07-17/form-jquery.html) to use jQuery
  * ```.html(function or html-string)``` - just like the ```innerHTML``` method.
  * ```.submit(event handler)``` - define what happens when form is submitted.
  * ```.val()``` - get or set value of selected element.

### Tuesday, 4th July 2017

* practised touchtyping - e, r, u, i
* did some javascript challegenes on FCC
* practised jQuery selectors -> element, id , class
  * learnt how to select parent(s) ,children (find for multiple) , siblings of the selector
* code practise with the team to create a [simple countdown timer](../master/inClass/04-07-17/countdown-timer.html) remotely late at night.

### Wednesday, 5th July 2017

* practised touchtyping w & o
* jQuery new functions
  * ```toggleClass()``` - add/remove class depending on whether it's present in the selected element.
  * there's also the ```addClass()``` and ```removeClass``` method.
  * ```next()``` - get the next sibling of the selected element.
  * ```attr()``` and ```prop()``` method to get/set the attributes and properties.

### Thursday, 6th July 2017

* practised some javascript functions on repl.it
* did some intermediate js challenges on FCC.
* Had a mini informal pitch of project ideas to the co-ordinators.
  * my idea was to create a platform for people to find out about local events through pics and short video clips.
* practised touchtyping w&o still.

### Friday, 7th July 2017

* practised touch typing - **q** & **y**
* solved many js problems involving functions on repl.it
* had an in-class javascript video lesson on scope and higher-order functions.
  * every body wrote a [function](../master/inClass/07-07-17/js-functions.html) as directed by Ebuka.
  * tasked to write two functions:
    * a function to find the average of a set of any given numbers.
    * a function to find the sum of all prime numbers from 0 to a given number.
* watched some bootstrap tutorials to help in optimizing my portfolio website.

### Saturday, 8th July 2017

* touch typing - t & p. my accuracy and speed declining due to incorporating a wider range of keys.
* reached 75% of js challenges on repl.it
  * mostly working with arrays and objects
  * learnt to write fail-safe code that makes sure arrays aren't empty and expecting right inputs from objects before perfoming an action.

### Sunday, 9th July 2017

* still working on the js challenges on repl.it
* discovered the power of the [reduce method](../master/inClass/07-07-17/reduce-snippets.js) of arrays
  * the inital value parameter is very useful, can be set to an empty string/array/object or numbers as the base of the return value.
  * can be used in place of chaining other array methods like (map*filter) or (filter&sort) etc.

### Monday, 10th July 2017

* practised touch typing - front row keys
* took an off day and didn't attend camp today

### Tuesday, 11th July 2017

* created a [file](../master/inClass/11-07-17/jsutils_js.js) that contains basic js utility functions.
* discussed briefly about client-server architecture.
* intro to Node.js - use npm init just like git init
  * to export variables/functions in a file use ```module.exports = myFunction```
  * to import variables/functions from a file use ```require('path of file')```
  * to export as a collection, put into an object: ```module.exports = myObj```
* installed an npm package and used it in [index.js](../master/inClass/11-07-17/index.js)

### Wednesday, 12th July 2017

* working on a [todo app](../master/todoApp/features.txt) project
  * designing the UI of the app as directed by Ebuka
  * tools used include html,css,bootstrap,jquery,google fonts,font-awesome icons
* worked on creating a responsive nav bar using css, html, jquery.

### Thursday, 13th JUly 2017

* further update on the todo app
  * edited app to use jquery to display added tasks or nothing if no todo
  * used es6 temperal strings to add _completed_ and _checked_ class/attributes to a todo
  * would need to learn about state management and data binding for syncing UI
  * Added functionality -->
    * can add/remove todo
    * can mark as completed
    * display number of todos

### Friday, 14th July 2017

* further update on the todo app
  * app can filter active and completed todos --> state management comes into play
    * render todos based on filtering by the all, active and completed states of the app
    * filter based on the ```completed``` property of ```todo``` object
  * saved todos can be edited or deleted
    * double-click on a todo to be edited, and it changes to a text input with its original value
    * either by pressing the ```ENTER``` key or focusing outside the todo, it gets edited
    * if the value is empty in both cases, the todo gets deleted
    * todos can also be deleted by clicking on the _x_ button (displays when hovered)

### Saturday, 15th July 2017

* Installed MongoDB as my NoSQL database per [instructions](https://www.youtube.com/watch?v=pWbMrx5rVBE)
    * In the installation folder, created two new folders - **data/db** (for storing all data from our my files) and **log**
    * From the cmd line, navigated to the **bin** folder and installed it as a window service while specifying the path for db and log ```C:\mongodb\bin>mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongo.log --logappend --rest --install```
    * ```net start MongoDB``` starts up mongoDB and ```net stop MongoDB``` closes the service
    * Used the ```mongo``` command in the \bin path cmdline to start mongo shell to access mongo database
    * Make sure to check the log for any errors that might occur, it tells you the casue of the issue.
* Looked briefly at es6 **Promises**
    * its an object that handles the completion (resolve/reject) of an asynchronous process, it acts as a placeholder of the result of a process that completes in the future.
    * Has three states - _Unresolved Resolved Rejected_
      * In unresolved, the promise polls for the completion of the async process
      * In resolved, process is completed and passes, chained to the ```then()``` method
      * In rejected, process is completed and fails, chained to the ```now()``` method

### Sunday, 16th July 2017

* MongoDB CRUD actions
  * **Create** - ```db.createCollection(collection)```  ```db.collection.insert(document)```
  * **Read** - ```db.collection.find()``` returns collection, finding with a _query_ returns the matched document
        * using the ```$or``` operator to find more than one obj at a time
        * the ```$gt $lt``` operators for finding obj values greater than/less than in the queried document
  * **Update** - ```db.collection.update(query,replaceWith,option)``` 
        * to append to document use the ```$set``` operator as the _key_, updated doc as the _value_ in the ```replaceWith``` field.
        * to increment by a value, use the ```$inc``` operator in the same way
        * the ```$unset``` operator removes a document field from the selected query
        * use the ```$rename``` operator to rename a _key_ in the selected query
        * Setting ```upsert``` to true in the _option_ field allows a collection to be updated with a non-matched query.
  * **Delete** - ```db.collection.remove(query,option)```
        * setting the ```justOne``` option to true deletes the first match otherwise all matched queries are deleted from the collection

### Monday, 17th July 2017

* Worked on some problems on repl.it
* Some HTTP request methods are:
  * the HTTP GET method is used to read/retrieve a resource from a server
  * the HTTP HEAD method is like a simplified version of the GET method
  * the POST request is for sending data to a server and PUT request is for updating data on server
* Express server - abstracts the HTTP request methods for server-side 
  * created a [simple express server](../master/todoServer/nodeServer/index.js) for the todo app
  * Between the request and the response action, a middleware function can be added using the ```app.use()``` method and executed for each app response.
  * can use ```express.static()``` method to serve static files from the root directory
* Practised touch typing - **[v** & **m]** , **[c** & **,]** , **[x** & **.]**, **[z** & **]/**

### Tuesday, 18th July 2017

* Refactored todo app to store all todos on the server
  * the app loads from the server while serving necessary files to the client for rendering 
  * todo app handles submission/send data on client-side using jQuery post method to the server
  * CRUD functions are handled on the server while state management still remains on the client-side
* On the server-side, used the _body-parser_ npm package to retrieve data sent from the client
* Content is still saved on the todo app if browser is refreshed
* **TODO** - Make content still accessible if the server is refreshed also either use a json file or a database (prefarably mongoDB).

### Wednesday, 19th July 2017

* Today all about revisitng what I have learnt so far
  * practised touch typing
  * went over the todo app

### Thursday, 20th July 2017

* Practise touch typing, now includes TAB and ENTER key
* Touched more on MongoDB, Mongoose ODM and Robo 3T
  * To access nested objs, wrap in quotes e.g - ```{"address.city":"Lagos"}```
    * New methods: ```sort()``` uses 1 for ascending -1 for descending
    * ```count()``` returns number of docs in the collection, like a .length property
    * ```limit()``` limits the count to the specified number
    * ```forEach()``` applies a function to each docs in the collection
    * ```print()``` prints output to the mongo shell

### Friday, 21st July 2017

* Watched a quick study video clip about JSON
  * Valid JSON uses double quotes for each key/value pair name and allows only 6 data types of        ```number string boolean object array null```
  * To convert a javascript object to valid JSON use the ```JSON.stringify()``` method
  * To convert JSON to js object use the ```JSON.parse()``` method
* Learnt how to use AJAX to send data in JSON format between client-server
* AJAX allows this data to be sent from server to client and vice versa without web page reloading.
* Created a git repo - [**jsonet**](https://github.com/elitenoire/jsonet.git) to demonstrate the json/ajax data handling.

### Saturday, 22nd July 2017

* WOrked on the js problems on repl.it
* practised touch typing
* More on JSON and AJAX

### Sunday, 23rd July 2017

* Wrote a [simple web page](https://github.com/elitenoire/jsonet/tree/master/pet-profile) to display info about pets when a button is clicked - uses jquery,json,ajax
* Intro to RESTful APIs - using node.js express mongodb
  * **API** - a middleware that describes the functionality of the service available to its users. It defines the structure of a request and response that's sent back to the client from the server.
  * **REST** - an architectural design style for networked apps that uses a stateless, client-server, cacheable communications protocol like a simple HTTP protocol.
  * **RESTful APIs** use the HTTP protocol to GET POST PUT and DELETE data based on the functions defined in the API.
  * APIs built using REST services are lightweight, maintable and scalable and operate on 6 constraints.
    * CLient-Server, Stateless, Cache, Uniform Interface, Layered System and Code on Demand.

### Monday, 24th July 2017

* Finished repl.it js problems
* Studied JSON/AJAx in depth
* Practised touch typing

### Tuesday, 25th July 2017

* Worked on a class project - [KodedLand](https://github.com/elitenoire/kodedland.git)
  * We designed a basic UI for it: inspiration from reddit, nairaland, stackoverflow
  * App uses express server and an ejs view render engine
* Started a react project using create-react-app

### Wednesday, 26th July 2017

* KodedLand update
  * created another view for adding posts
  * displays the login form if not logged in otherwise the user's profile is displayed
  * using mongoose /mongodb to store our data
    * created a schema for user's post
    * queries our mongo db using mongoose, (can use callbacks,promises,async to perform other functions while retriving matched queries from the database)
    * Queries are returned as promises, the data from db are rendered using the ```then()``` method
    * Posts can be created and read/displayed at the home page

### Thursday, 27th July 2017

![The MVC Architecture](https://alltechtricks9.files.wordpress.com/2015/09/11.png?w=705)

* A brief look at the MVC  - better organized and more maintainable code
  * **Model** - (_the data layer_)
    * stores the data object of the app
    * notifies its observers whenever the model changes
  * **View** - (_the presentation layer_)
    * renders the model in a suitable interactive form for the client/user
    * has access to the DOM and can setup event handlers
    * forwards user actions to the controller
    * multiple views can exist for a single model for different purposes.
  * **Controller** - (_the application logic_)
    * processes and responds to events set off by either the model or view
    * updates model by reacting on the users actions
    * can update the view when the model changes
    * any other decision making and logic implementation can be done here

* Learning how to use handlebars.js for building view templates as opposed to using ejs or jade(pug)
  * ``{{expression}}`` gets compiled to html (_html element tags/special characters are escaped_), use ```{{{expression}}}``` to render without escaping the value
  * ```{{#if boolean}} {{/if}}``` represents an if expression block; open with ```{{#}}``` and close with ```{{/}}```
  * ```{{../}}``` path segment references to the parent template scope
  * helper function ```{{#each}} {{/each}}``` used to iterate over an array
    * register a custom helper to perform complex logic using ```Handlebars.registerHelper(helperName, function)```
  * a registered partial can be used as ```{{> partialName}}``` , makes templates reusable
    * register a partial using ```Handlebars.registerPartial(partialName, partialString)```

### Friday, 28th July 2017

* More on developing with MongoDB and using the Mocha test framework
  * a schema defines the structure of data
  * a mongoose model represent all the data in a single collection in mongodb
  * an instance of a model represent a document which can be saved and retrieved from the database
  * sub documents are embedded documents, same as nesting schemas in other schemas

### Saturday, 29th July 2017

* Continuing with learning mongodb and using Mocha
* Great thought for database visualization, best schema representation, tradeoff between embedding and referencing documents
* Mocha testing -
  * most of the functions dealing with mongodb are asynchronous and might fail silently if not waiting to complete, use of promises or callback function to avoid
  * mocha makes use of a ```describe``` block (for grouping multiple tests) with a function argument that can have multiple ```it``` blocks for distinctive test cases
  * A hook - function to be executed first before running any tests within the test suites
    * ```Before(func)``` -  this hook executes the function only once hence can create a mongodb connection via mongoose inside it
    * ```beforeEach(func)``` - this hook executes the function before each test is run
      * can use this hook to empty a collection before performing each test
  * automate mocha test using ```nodemon --exec 'mocha -R min'``` the min flag -> condenses output, the R flag -> clears the previous output, the cmd inbetween  ' ' is run each time nodemon detects changes in any file
    * **NOTE** this is specified as the test property of the scripts object in package.json instead of ```mocha```
* learnt how to **perform CRUD tasks using mongoose** connection to mongoDB
  * create a model from a schema using ```let MyModel = mongoose.model(modelName,schema,collectionName)```
  * create an instance using ```let instance = new myModel()```
  * save a model instance using ```instance.save()```
  * read/retrieve record using ```find()``` and ```findOne()```
  * delete record using ```remove()``` on model instance
  * delete using ```remove() findByIdAndRemove() findOneAndRemove()``` on model class
  * update record using ```update()``` or ```set() save()``` on model instance
  * update using ```update() findByIdAndUpdate() findOneAndUpdate()``` on model class

### Sunday, 30th July 2017

* Took a break

### Monday, 31st July 2017

* Practised touch typing
* Looked at Bootsrap grid system, containers, rows and columns for xs,sm,md,lg,xl
* Bootstrap style for list using ```list-inline list-inline-items```
* Bootstrap typography - styles for headings, blockquotes
  * ```font-weight-bold text-sm-right```

### Tuesday, 1st August 2017

* Creating a react-native app using expo xde
* Three main steps in creating a basic app
  * Have to import library to create components(_-contain content/text to be rendered to a device_)
    * The react library -> connect components together to make 'em work
    * The react-native library -> renders output from components to mobile device
      * use import destructuring to import core components eg ```{Text}```
  * Create components
    * Define a function that returns a component object to be rendered
    * Some jsx tags supported by react-native :
      * ```<Text><Text>``` renders text/string content
      * ```<View><View>```
  * Render app to device
    * register the root component ```AppRegistry.registerComponent(appKey,func)```

### Wednesday, 2nd August 2017

* Learning ReactNative
  * _Root_ refers to the first component that gets rendered to the screen, any component that it renders is its _Child_
  * Only the _Root_ component uses the AppRegistry, other components need to be exported to be reused elsewhere and can be nested.
* Worked on the React tutorial (_TicTacToe game_) in class
  * React makes use of two types of data to control components:
    * **Props** - static data, a _parent_ component passes the value to its _child_
    * **State** - data that changes, could be from user input or data from server
  * Ideal to manage state in the parent (_higher-order_) component or via _FLux/Redux_
  * Stateless components (_focusing on UI and not behaviour_) can be defined as functions using es6, no need for classes/constructors
    * Destructured props can be passed as simple function arguments