/* exported oddOrEven */

// Parameters
// numbers - an array of numbers
// Return Value
// A new array containing strings that indicate whether the corresponding number was 'odd' or 'even'.
function oddOrEven(numbers) {
  const resultArray = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      resultArray.push('even');
    } else {
      resultArray.push('odd');
    }
  }
  return resultArray;
}
