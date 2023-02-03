/* exported getStudentNames */

// getStudentNames(students)
// Parameters
// students - an array of objects; each with a string name property.
// Return Value
// A new array containing only the name of each student object.

// Example
// var students = [
//   {
//     name: 'Shrek'
//   },
//   {
//     name: 'Donkey'
//   },
//   {
//     name: 'Fiona'
//   }
// ];
/* getKeys */
function getStudentNames(students) {
  const resultArray = [];

  for (var i = 0; i < students.length; i++) {
    resultArray.push(students[i].name);
  }
  return resultArray;
}
