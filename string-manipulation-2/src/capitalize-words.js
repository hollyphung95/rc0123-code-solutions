/* exported capitalizeWords */
/* Parameters - string - any JavaScript String
Return Value  - Returns string with every word capitalized. */

/* Build a  string word character by character.
When the word is complete concat the word with the reset the string.
A word is complete when the current position is a space or the end.
*/
function capitalizeWords(string) {
  var resultString = '';
  var stringBuilder = '';
  var strArray = string.split(' ');

  for (var word in strArray) {
    stringBuilder += ((strArray[word].charAt(0).toUpperCase()).concat(strArray[word].substring(1).toLowerCase())).concat(' ');
  }
  resultString = stringBuilder;

  return resultString.trimEnd();
}
