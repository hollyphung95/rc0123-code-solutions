/* exported getIndexes */
// Parameters      array - any array
// Return Value    A new array containing the indexes from the input array.
// Example
// getIndexes(['meow', 'woof', 'squeak', 'shazoo'])// [0, 1, 2, 3]

/* Define a function named getIndexes with one parameter, array, which is any javascript array.
Create a new empty array to store the resultArray.
Use a for loop to check our condition.  Start by assigning 0 to an index variable.
this serves as our counter. Check whether index is less than the length of array.
The final expression in the for loop will increment our counter index by 1.
Recall we want to return a array of the indexes.
In this for loop,  Check if currentIndex is less than lastIndex of the array.
Say we start at index zero and array is empty. the length of array would then be 0 minus 1. which is negative 1. which tells us its an empty array.
If theres a nextItem ( something at the next index position), then add number of the index to resultArray and continue.
Once the loop terminates return resultArray, which is a new array containing the indexes from the input array. */

function getIndexes(array) {
  const resultArray = [];

  for (var i = 0; i < array.length; i++) {
    resultArray.push(i);
  }
  return resultArray;
}
