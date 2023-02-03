/* exported reverseWord */
// 🚨 Do not use String.prototype.split for this problem. 🚨

/* Define a function reverseWord with one parameter, word.
word is a single word as a JavaScript String */
/* Return should be A JavaScript String containing the characters of word in reverse order.
reverse / backwards = starting from the end and ending in the front. */
function reverseWord(word) {
  var result = '';
  for (var i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }
  return result;
}
