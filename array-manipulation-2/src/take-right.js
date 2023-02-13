/* exported takeRight */
/* 🚨 Do not mutate the input array! 🚨

Parameters
array - Any JavaScript Array
count - A positive integer Number of elements to "take" from the end of array.
Return Value
A new Array containing the last count elements of array.
If the count is larger than the length of the array,
then a shallow copy of the entire array is returned. */
function takeRight(array, count) {
  var resultArray = [];
  if (array.length === 0) {
    return resultArray;
  } else if (array.length < count) {
    for (var index in array) {
      resultArray.push(array[index]);
    }
  } else {
    for (var i = array.length - count; i <= array.length - 1; i++) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}
