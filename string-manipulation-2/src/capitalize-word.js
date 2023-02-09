/* exported capitalizeWord */
/* Parameters - word - A single word as a JavaScript String
Return Value  - Returns word with its first character uppercased and the rest of its characters lowercased. For this function, JavaScript is always cased as JavaScript.  */
function capitalizeWord(word) {
  var resultString = '';
  resultString = word[0].toUpperCase() + word.substr(1).toLowerCase();

  if (word.toLowerCase() === 'javascript') {
    resultString = 'JavaScript';
  }
  return resultString;
}
