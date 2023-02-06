/* exported getLastNameOfPerson */
/* Define a function, named ‘getLastNameOfPerson(person)’, that accepts one argument,   ,   .
Declare Create a variable named ‘result’, and
assign that value  to { - } .
 person - a JavaScript object with firstName and lastName properties
Return the value of the ‘result’ variable.
The value stored in the lastName property of the person object.
var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};
function getLastNameOfPerson(lea) //  "Verou" */

function getLastNameOfPerson(person) {
  var responseLastName = '';
  responseLastName = person.lastName;
  return responseLastName;
}
