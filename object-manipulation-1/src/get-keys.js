/* exported getKeys */

/* Define a function named getKeys with one parameter, object.
object is any JavaScript Object.
Create an array literal by assign an empty array to const resultArr
use a for...in loop to access each key in object.
Add the key to keys by calling the push method of the keys array with one argument, key
This function should:
Return an Array of the object's property keys. */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
