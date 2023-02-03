/* exported filterOutStrings */

// Parameters     -   strings - an array of strings
// Return Value   -   A new array containing all of the original input values except the strings.

// filterOutStrings([1, 'a', 'b', 2, 3, 'c'])
// [1, 2, 3]

/* Define a function named filterOutStrings with one parameter, strings, which is an array of strings
Create a new empty array to store the resultArray.
Use a for loop to check our condition.  Start by assigning 0 to an index variable.
this serves as our counter. Check whether index is less than the length of the array.
The final expression in the for loop will increment our counter index by 1.
Recall we want to return a array excluding the strings.
In this for loop,  Check if the value at the index of the array is not a string.
If valid, then add the value to resultArray
Once the loop terminates return resultArray, which is the new array we created at the beginning of the function.
resultArray contains all of the original input values except the strings. */

function filterOutStrings(strings) {
  const resultArray = [];

  for (var i = 0; i < strings.length; i++) {
    if (strings[i] !== String(strings[i])) {
      resultArray.push(strings[i]);
    }
  }
  return resultArray;
}
