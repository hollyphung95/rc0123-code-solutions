/* Define a function named convertMinutesToSeconds with one parameter: minutes.
minutes will be a number of minutes.
the function should return the equivalent number of seconds. */
function convertMinutesToSeconds(minutes) {
  var seconds = 60 * minutes;
  return seconds;
}
console.log('There are ', convertMinutesToSeconds(5), ' seconds');

/* Define a function named greet with one parameter: name.
name will be a string representing a person's name.
The function should return a greeting that includes the name. */
function greet(name) {
  var greeting = 'Hi ' + name + ', have a great day !';
  return greeting;
}
console.log(greet('Rob'));

/* Define a function named getArea with two parameters: width and height.
The parameters will be the width and height of a rectangle.
The function should return the area of that rectangle. */
function getArea(width, height) {
  return width * height;
}
console.log('the area of the width and height is :', getArea(2, 5));

/* Define a function named getFirstName with one parameter: person.
person will be a JavaScript object with firstName and a lastName properties.
The function should return the first name of the person. */
function getFirstName(person) {
  return person.firstName;
}
console.log('the persons first name is: ',
  getFirstName({
    firstName: 'Holly',
    lastName: 'Phung'
  })
);

/* Define a function named getLastElement with one parameter: array.
array will be a JavaScript array.
The function should return the last element of the array. */
function getLastElement(array) {
  return array[array.length - 1];
}
console.log(getLastElement([]));
