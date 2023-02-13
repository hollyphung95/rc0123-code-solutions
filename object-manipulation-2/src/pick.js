/* exported pick */
/*  This function creates an object composed of the picked source properties.
This function will take in two arguments, any javascript object and an array of strings.
The strings in the array are the properties that we will check the source object of having.
In other words, for every key in the array of keys, we check if the key of source object is valid,
if yes, then the value of specified object property will be assigned to a new key, and added to the return object.
otherwise, that property will not be added.
if none of the properties in the array is found , the return object will return a object with no keys or values. */
function pick(source, keys) {
  var returnNewObj = {};

  for (var prop in source) {
    if (keys.includes(prop) && source[prop] !== undefined) {
      returnNewObj[prop] = source[prop];
    }
  }
  return returnNewObj;
}
