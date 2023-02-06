/* exported getSecondCharacter */
/* Define a function, named ‘getSecondCharacter(string)’, that accepts one argument, string  .
Declare Create a variable named secondChar, and
assign string[1] to the variable secondChar;
Return the value of the secondChar variable.
/* getSecondCharacter(string)

string - a string
index - a numeric index greater than or equal to 0
The character in string at the specified index. */
function getSecondCharacter(string) {
  var charFound = '';
  charFound = string[1];
  return charFound;
}
