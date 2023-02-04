/* exported compact */
/* Define a function named compact with one parameter, array.
array is Any JavaScript Array.
This function should Return A new array containing all elements of array with a truthy type value */
function compact(array) {
  var newArray = [];

  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    } else {
      newArray.push();
    }
  }
  return newArray;
}
