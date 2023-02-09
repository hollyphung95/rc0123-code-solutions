/* exported lastChars */
/* Parameters
length - an integral JavaScript Number
string - any JavaScript String
Return Value
The last length characters of string.  */

function lastChars(length, string) {
  var resultValue = '';
  resultValue = string.substr(-length);
  return resultValue;
}
