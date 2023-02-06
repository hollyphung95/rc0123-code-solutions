/* exported getLastElement */
/* Define a function, named ‘getLastElement(array)’, that accepts one argument,array .
Declare Create a variable named ‘result’, and
use bracket notion to access the last index of the array given.
Create a new variable lastElement and assigned it to an empty string.
assign that value to  of the last element in the array to result.
function getLastElement(['i', 'tell', 'you', 'what']) //  "what" */
function getLastElement(array) {
  var result = '';
  result = array[array.length - 1];
  return result;
}
