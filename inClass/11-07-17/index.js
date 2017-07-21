// Importing some functions in reduce-snippets.js
// and testing if it works.

console.log('Hello from Node');
//importing a js file
var myfunctions = require('../09-07-17/reduce-snippets')
var naijaPhone = require('naija-phone-number') // no ./ to indicate an npm package

console.log(myfunctions.objToList({name: 'Eva', lastName: 'Igwe', sex: 'f'}));
console.log(myfunctions.arrayOfObjects([[['make', 'Ford']],[ ["model", "Mustang"]]]));
console.log(myfunctions.getFactorial(5));
console.log(naijaPhone.isValid(08123365552));