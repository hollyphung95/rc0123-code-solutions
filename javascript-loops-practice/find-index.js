/* exported findIndex */

// findIndex(array, value)
// Parameters
// array - an array of values
// value - the value to search for in the array
// Return Value
// The first index at which value is found inside array. If it is not found, the function should return -1.

// Example
// findIndex([9, 8, 3], 4) // -1
function findIndex(array, value) {
  var firstIndex = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      firstIndex = i;
      break;
    }
  }
  return firstIndex;
}
