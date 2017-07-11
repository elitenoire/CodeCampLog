//Compute Factorial of a number
function computeFactorialOfN(n) {
  // your code here
  function factorial(n){
    if(n === 0 || n === 1)
      return 1;
    return n * factorial(n-1);
  }
  return factorial(n);
}

// This takes in an array of arrays, and returns an object with 
// each pair of elements in the array as a key-value pair.
// array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
// returns Object {  "make": "Ford",  "model": "Mustang",  "year": 1964}

function fromListToObject(array) {
  // your code here
  return array.reduce((obj,arr)=>{ 
            obj[arr[0]] = arr[1];
            return obj;
            },{})
}

// Uses the above function to return an array of objects from a nested array of arrays
// array =  [[['make', 'Ford']],[ ["model", "Mustang"]]]
// returns Array [{"make": "Ford"},{"model": "Mustang"}]
function arrayOfObjects(nestedArray) {
  // your code here
  return nestedArray.map(fromListToObject);
}

// converts an object to a list
function convertObjectToList(obj) {
  // your code here
  var keyList = Object.keys(obj);  
  return keyList.reduce((list,key)=> {
      list.push([key, obj[key]]);
    return list;},[])
}

module.exports = {//allows these functions to be exported
  objToList: convertObjectToList,
  listToObj: fromListToObject,
  getFactorial: computeFactorialOfN,
  arrayOfObjects, //es6 key-value pair have same name
}