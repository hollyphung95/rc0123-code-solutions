/* exported initial */
/* 🚨 Do not use slice(), splice(), pop(), or shift() in your implementation of initial.
Define a function named initial with one parameter, array.
array - Any JavaScript Array
This function should Return A new array containing all elements of array except the last. */
function initial(array) {
  var newArray = [];

  array.forEach((element, index, array) => {
    if (index !== array.length - 1) {
      newArray.push(element);
    }
  });
  return newArray;
}
