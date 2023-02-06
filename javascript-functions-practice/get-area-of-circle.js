/* exported getAreaOfCircle */
/* Define a function, named ‘getAreaOfCircle(radius)’, that accepts one argument,   ,   .
Declare a variable named ‘result’ and assign 0 to it.
To get the area of a circle, which is pi r squared.
we need Math.PI for pi, the radius , which was given to us, and Math.pow to raise the radius to the second power.
Create a new variable multipliedNumber.
Use Math.pow to rise the given radius to two and assign that value to multipliedNumber.
Then multiply multipliedNumber with Math.PI for the value of π (pi). Assign the return value to result.
Return the value of the ‘result’ variable.
The return should be the area of a circle with the given radius.

function getAreaOfCircle(3)   //  28.274333882308138

getAreaOfCircle(radius)
Parameters
radius - a number
Return Value
The area of a circle with the given radius.
*/
function getAreaOfCircle(radius) {
  var result = 0;
  var multipliedNumber = Math.pow(radius, 2);
  multipliedNumber = multipliedNumber * Math.PI;

  result = multipliedNumber;
  return result;

}
