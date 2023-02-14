/* exported omit */
function omit(source, keys) {
  var returnNewObj = {};

  for (const prop in source) {
    if (!keys.includes(prop)) {
      returnNewObj[prop] = source[prop];
    }
  }
  return returnNewObj;
}
