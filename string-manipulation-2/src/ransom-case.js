/* exported ransomCase */
/* Parameters - string - any JavaScript String
Return Value - Returns string with every-other character uppercased.
*/

function ransomCase(string) {
  var resultString2 = '';

  for (var i = 0; i < string.length; i++) {

    if (/[a-z]/.test(string.charAt(0))) {
      if (i % 2 === 0) {
        resultString2 += string.charAt(i).toLowerCase();
      }
      if (i % 2 === 1) {
        resultString2 += string.charAt(i).toUpperCase();
      }
    }

    if (/[A-Z]/.test(string.charAt(0))) {
      if (i % 2 === 0) {
        resultString2 += string.charAt(i).toLowerCase();
      }
      if (i % 2 === 1) {
        resultString2 += string.charAt(i).toUpperCase();
      }
    }
  }
  return resultString2;

}
