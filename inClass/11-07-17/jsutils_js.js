// Boolean type Coercion
// false, 0, null, undefined;

// Check type of value
function checkType(value) {
  return typeof value
}

// Check for empty array
function checkEmptyArray(arr) {
  if (arr.length) {
    return false
  }
  return true
}

// Check if object key exists
function checkKeyExists(obj, key) {
  if (obj[key]) {
    return true
  }
  return false
}

// Add key to object
function addKeyToObject(obj, key, value) {
  obj[key] = value
  return obj
}

// Remove key from object
function removeFromObj(obj, key) {
  delete obj[key]
  return obj
}

// Create array of object keys
function arrayOfObjectKeys(obj) {
  return Object.keys(obj)
}

// Create array of object values
function arrayOfObjectValues(obj) {
  delete obj.a
  return Object.values(obj)
}

// Create a new array from an array
function arrayCopy(arr) {
  return arr.slice()
}

// Loop through values in an array
function loopArray(arr) {
  arr.forEach(function(val) {
    //dfafdsfafsadfsdffasfasfasdsdfsds
  })
  for (var i = 0; i < arr.length; i++) {
    // fsfafasfsfasdfasfs
    // arr[i]
  }
}

// arr.unshift() arr.push()  arr.pop() arr.shift()

// Add value to array
function addToArray(arr, value, index) {
  // arr.splice(index, 0, value);
  // return arr;
  return arr.slice(0, index).concat(value, arr.slice(index))
}

// var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

// Remove value from array index
function removeFromArray(arr, index) {
  // slice from beginning of array till the index
  // slice from the index + 1 til the end of the array
  return arr.slice(0, index).concat(arr.slice(index + 1))
}

console.log('Hello from jsutil file')
