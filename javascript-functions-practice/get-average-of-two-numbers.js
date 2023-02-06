/* exported getAverageOfTwoNumbers */
/*
  Define a function named 'getAverageOfTwoNumbers' that accepts two arguments, x and y.
  Both x and y are numbers.
  Declare a variable named 'result' and assign 0 to it.
  Create a variable named 'sumNumber.
  Add x and y and and assign that value to sumNumber.
  Divide sumNumber by 2 and assign that value to result.
  return result.  It should be the average of x and y.
*/
function getAverageOfTwoNumbers(x, y) {
  var result = 0;
  var sumNumber = x + y;
  result = sumNumber / 2;

  return result;
}
