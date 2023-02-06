/* exported getLastCharacter */
/* Define a function, named ‘getLastCharacter’, that accepts one argument, string.
Declare Create a variable named ‘result’, and use brackets to access the last character of the string given.
assign that value to string - a string
Return the value of the ‘result’ variable.
The return value should be The last character of the input string. */
function getLastCharacter(string) {
  var lastChar = '';
  lastChar = string[string.length - 1];
  return lastChar;
}
