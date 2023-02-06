/* exported getFullNameOfPerson */
/* Define a function, named ‘getFullNameOfPerson(person)’, that accepts one parameter, person  ,   .
/*  Declare Create a variable named ‘result’, and
person is of type object. Access the firstName and lastName properties of the person object.
Use contenation to add the firstName and last name together. separated by a space.
assign that value  to fullName;
 person - a JavaScript object with firstName and lastName properties
Return the value of the ‘result’ variable.
The values of the firstName and lastName properties of the person object concatenated together with a space between.
var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};
function getFullNameOfPerson(lea) //  "Lea Verou"

use string concatenation firstName and lastName and assign the result to a new variable named fullName. */
function getFullNameOfPerson(person) {
  var fullNameString = '';
  fullNameString = person.firstName + ' ' + person.lastName;
  return fullNameString;
}
