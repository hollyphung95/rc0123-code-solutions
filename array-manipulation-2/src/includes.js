/* exported includes */
/* 🚨 Do not use Array.prototype.includes in your implementation. 🚨

Parameters
array - Any JavaScript Array
value - The value to search for in array
Return Value
A Boolean indicating the presence of value at any index of array. */
function includes(array, value) {
  var valueIsPresent = false;

  for (var index in array) {
    if (array[index] === value) {
      valueIsPresent = true;
    }
  }
  return valueIsPresent;
}
