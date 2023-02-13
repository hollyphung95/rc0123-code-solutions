/* exported firstChars */
/* Parameters
length - an integral JavaScript Number
string - any JavaScript String
Return Value
The first length characters of string.
  */

function firstChars(length, string) {

  var resultValue = '';
  if (string.length === 0 || null) {
    return resultValue;
  }

  for (var i = 0; i < string.length; i++) {
    resultValue += string.charAt(i);
    resultValue = string.slice(0, length);
  }
  return resultValue;
}
