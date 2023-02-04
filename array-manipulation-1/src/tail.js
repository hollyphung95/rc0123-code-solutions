/* exported tail */
/* 🚨 Do not use slice(), splice(), pop(), or shift() in your implementation of tail.
Define a function named tail with one parameter, array.
array is Any JavaScript Array.
This function should Return A new array containing all elements of array after the first. */
function tail(array) {
  var newArray = [];
  for (var i = 1; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
