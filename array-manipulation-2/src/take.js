/* exported take */
/* 🚨 Do not mutate the input array! 🚨

Parameters
array - Any JavaScript Array
count - A positive integer Number of elements to "take" from the beginning of array
Return Value
A new Array containing the first count elements of array. */
function take(array, count) {
  var selectedElements = [];

  if (array.length === 0) {
    return selectedElements;
  } else if (array.length < count) {
    for (var index in array) {
      selectedElements.push(array[index]);
    }
  } else {
    for (var i = 0; i < count; i++) {
      selectedElements.push(array[i]);
    }
    return selectedElements;
  }
}
