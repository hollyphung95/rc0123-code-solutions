/* exported numVowels */
/* Parameters - string - any JavaScript String
Return Value  - The Number of vowel characters in string.  */
function numVowels(string) {
  var vowelCount = 0;

  for (var i = 0; i < string.length; i++) {
    if (/[aeiou]|[AEIOU]/.test(string.charAt(i))) {
      vowelCount++;
    }
  }
  return vowelCount;
}
