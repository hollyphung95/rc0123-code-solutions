/* exported chunk */
/* 🚨 Do not mutate the input array! 🚨

Parameters
array - Any JavaScript Array
size - A positive integer Number indicating the desired "chunk" size.
Return Value
A new Array of Arrays.
Each sub-Array has a length equal to size.
Remaining elements are gathered into a final sub-Array.

OPTIONAL CHALLENGE (optional: don't do it this way if it takes a long time to solve)
Do not use Array.prototype.slice in your implementation. */
function chunk(array, size) {
  var arrSplitUp = [];

  for (var i = 0; i < array.length;) {
    arrSplitUp.push(array.slice(i, i += size));
  }
  return arrSplitUp;
}
