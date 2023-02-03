/* exported sumAll */
// Parameters     -   numbers - an array of numbers
// Return Value   -   A number that is the result of adding all numbers together.
// Example
// sumAll([1200, 1, 0])// 1201

function sumAll(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
