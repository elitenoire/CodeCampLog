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
* installed an npm package and used it in [index.js](../master/learnNode/index.js)

### Wednesday, 12th July 2017
* working on a [todo app](../master/myToDo/features.txt) project
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
        * filter based on the ```completed``` property of ```todo``` object, 
    * saved todos can be edited or deleted
        * double-click on a todo to be edited, and it changes to a text input with its original value
        * either by pressing the ```ENTER``` key or focusing outside the todo, it gets edited
        * if the value is empty in both cases, the todo gets deleted
        * todos can also be deleted by clicking on the _x_ button (displays when hovered)

### Saturday, 15th July 2017
* Installed MongoDB as my NoSQL database per [instructions](https://www.youtube.com/watch?v=pWbMrx5rVBE)
    * In the installation folder, created two new folders - **data/db** (for storing all data from our my files) and **log**
    * From the cmd line, navigated to the **bin** folder and installed it as a window service while specifying the path for db and log ```C:\mongodb\bin>mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongo.log --logappend --rest --install```
    * ```net start MongoDB``` starts up mongoDB and ```net stop MongoDB``` closes it
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
        * setting the ```justOne`` option to true deletes the first match otherwise all matched queries are deleted from the collection