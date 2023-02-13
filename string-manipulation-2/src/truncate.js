/* exported truncate */
/* Cuts string down to at most length characters long and appends an ellipsis (...).
Parameters
length - an integral JavaScript Number
string - any JavaScript String
Return Value  - A shortened version of string, plus in an ellipsis.  */

function truncate(length, string) {
  var resultString = '';
  var ellipsis = '...';

  if (string.length === 0) {
    return ellipsis;
  } else if (string.length < length) {
    for (var index in string) {
      resultString += string[index];
    }
  } else {
    for (var i = 0; i < length; i++) {
      resultString += string[i];
    }
  }
  resultString += ellipsis;
  return resultString;
}
