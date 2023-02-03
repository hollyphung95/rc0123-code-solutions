/* exported includesSeven */

// Parameters       - array - an array of values
// Return Value     - A boolean indicating whether or not the number 7 is anywhere in the array.
/* Define a function named includesSeven with one parameter, array, which is any Javascript array.
Assign false to a new variable result;
Use a for in loop to check each value in the array.
Check if the value is === 7 and assign that result to the variable result.
Recall we want to return a boolean of A boolean indicating whether or not the number 7 is anywhere in the array.
return result. */
// includesSeven([77, 200, 700, '7'])   // false
function includesSeven(array) {
  var result = false;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      result = true;
    }
  }
  return result;
}
