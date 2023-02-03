/* exported countdown */
// Parameters     -   number - any positive integer
// Return Value   -   An array of numbers counting down from the initial number.
// Example
// countdown(10)// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

function countdown(number) {
  var resultArray = [];
  for (var i = number; i >= 0; --i) {
    resultArray.push(i);
  }
  return resultArray;
}
