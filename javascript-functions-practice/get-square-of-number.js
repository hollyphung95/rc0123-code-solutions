/* exported getSquareOfNumber */
/*
  Define a function named 'getSquareOfNumber' that accepts one argument, number.

  Declare a variable named 'result' and assign 0 to it.
  Using the Math.pow , we call it with two arguments, number as the first argument and 2.
  Alternatively we couldve multiplied number by itself and assigned the return value of that to result.
  Assign that value to result. Return result.  It should be The number squared.
*/
function getSquareOfNumber(number) {
  var result = 0;
  var multipliedNumber = Math.pow(number, 2);
  // multipliedNumber = number * number;

  result = multipliedNumber;
  return result;
}
