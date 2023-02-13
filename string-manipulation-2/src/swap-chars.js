/* exported swapChars */

/* Parameters
firstIndex - an integral JavaScript Number
secondIndex - an integral JavaScript Number
string - any JavaScript String
Return Value  - string with the characters at firstIndex and secondIndex swapped.  */

function swapChars(firstIndex, secondIndex, string) {
  var resultValue = '';

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      resultValue += string[secondIndex];
    } else if (i === secondIndex) {
      resultValue += string[firstIndex];
    } else {
      resultValue += string[i];
    }

  }
  return resultValue;
}
