/* exported addSuffixToAll */
// Parameters    -   words - an array of strings
// Return        -   ValueA new array containing each word with the suffix appended to it.
// addSuffixToAll(['equal', 'abnormal', 'civil'], 'ity')
// ['equality', 'abnormality', 'civility']

function addSuffixToAll(words, suffix) {
  const resultArray = [];
  for (var i = 0; i < words.length; i++) {
    resultArray.push(words[i] + suffix);
  }
  return resultArray;
}
