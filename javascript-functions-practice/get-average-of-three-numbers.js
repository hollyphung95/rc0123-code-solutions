/* exported getAverageOfThreeNumbers */
/*
  Define a function named 'getAverageOfThreeNumbers' that accepts two arguments, x and y.
  Both x and y are numbers.
  Declare a variable named 'result' and assign 0 to it.
  Create a variable named 'sumNumber.
  Add x and y and and assign that value to sumNumber.
  Divide sumNumber by 3 and assign that value to result.
  return result.  It should be the average of x, y, and z.
*/
function getAverageOfThreeNumbers(x, y, z) {
  var result = 0;
  var sumNumber = x + y + z;
  result = sumNumber / 3;

  return result;
}
