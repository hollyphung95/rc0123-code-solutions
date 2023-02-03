/* exported toObject */

/* Assume keyValuePair is a valid with its description.
Checking its validity should be handled elewhere (separation of concerns) */

/* Define a function named toObject with one parameter keyValuePair.
keyValuePair is an Array containing two elements;
a String key and any other JavaScript value.
Create an empty object literal and assign it to a new const result.
use bracket notation to access the first and second elements in keyValuePair,
which is a string key and any other JavaScript value, respectively. */

/* Assign the key and value to resultKey and resultValue, respectively.
Note, Assigning the key and value to resultKey and resultValue is not necessary
but added for additional support to clarify the previous step. */

/* Assign resultValue to property resultKey of the resultObj Object
This function should:
return an Object with one property consisting of the passed keyValuePair. */
function toObject(keyValuePair) {
  const resultObj = {};
  const resultKey = keyValuePair[0];
  const resultValue = keyValuePair[1];

  resultObj[resultKey] = resultValue;
  return resultObj;
}
