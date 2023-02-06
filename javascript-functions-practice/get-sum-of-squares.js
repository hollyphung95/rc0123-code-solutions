/* exported getSumOfSquares */
/*
 Define a function, named 'getSumOfSquares', with two parameters, x and y, both of which are numbers.
  Declare a variable named 'result' and assign 0 to it.

  Create a new variable xSquared and use Math.pow to raise x to the second power.
  Create a new variable ySquared and use Math.pow to raise y to the second power.
  Add xSquared and ySquared together and and assign the return value of that to result.
  The Return should be the sum of x squared and y squared.
*/
function getSumOfSquares(x, y) {
  var result = 0;
  var xSquared = Math.pow(x, 2);
  var ySquared = Math.pow(y, 2);

  result = xSquared + ySquared;
  return result;
}
