/* exported getWords */

// Parameters
// string - A JavaScript String containing zero or more words, separated by spaces.
// Return Value
// An Array of JavaScript String.
// Each String is one of the words in the string parameter.
function getWords(string) {
  return string.length > 1 ? string.split(' ') : string.split('');
}
