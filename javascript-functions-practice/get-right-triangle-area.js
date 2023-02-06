/* exported getRightTriangleArea */
/*
  Define a function named 'getRightTriangleArea' that accepts two arguments, base and height.
  Both x and y are numbers,
  base is a number representing the base of a right triangle.
  height is a number representing the height of a right triangle.
  height is the length of the bottom of the triangle measured to the top.

  Declare a variable named 'result' and assign 0 to it.
  Create a variable named 'multipliedNumbers.
  Multiply base and height and and assign that value to multipliedNumbers.
  Recall Multiplying base and height would give us the area for a square.
  We only want half of that. So divide multipiedNumbers by 2 and assign that value to result.

  return result.  It should be the area of a right triangle with a base of base and a height of height.
*/
function getRightTriangleArea(base, height) {
  var result = 0;
  var multipliedNumber = base * height;
  result = multipliedNumber / 2;

  return result;
}
