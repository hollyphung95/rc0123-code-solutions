/* exported reverse */
/* Do not use Array.prototype.reverse() in your implementation of reverse.
Define a function named reverse with one parameter, array.
array is Any JavaScript Array.
This function should Return A new array containing all elements of array in reverse order. */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
