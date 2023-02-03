/* exported getValues */

/* Define a function named getKeys with one parameter, object.
object is any JavaScript Object.
Create an array literal by assign an empty array to const resultArray
use a for...in loop to access each key in object.
Add the value to resultArray by calling the push method of the resultArray object with one argument, object[key]
This function should:
Return an Array of the object's property values. */
function getValues(object) {
  var resultArray = [];
  for (var key in object) {
    resultArray.push(object[key]);
  }
  return resultArray;
}
