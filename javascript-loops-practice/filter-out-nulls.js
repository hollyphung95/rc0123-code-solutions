/* exported filterOutNulls */

// Parameters     -   values - an array of values
// Return Value   -   A new array containing all of the original input values except null.
/* Define a function named filterOutNulls with one parameter, values, which is an array of values
Create a new empty array to store the resultArray.
Use a for loop to check our condition.  Start by assigning 0 to an index variable.
this serves as our counter. Check whether index is less than the length of the array.
The final expression in the for loop will increment our counter index by 1.
Recall we want to return a array excluding the null values.
In this for loop,  Check if the value at the index of the array is not null.
If valid, then add the value to resultArray
Once the loop terminates return resultArray, which is the new array we created at the beginning of the function.
resultArray contains all of the original input values except null values. */

function filterOutNulls(values) {
  const resultArray = [];

  for (var i = 0; i < values.length; i++) {

    if (values[i] !== null) {
      resultArray.push(values[i]);
    }
  }
  return resultArray;
}
