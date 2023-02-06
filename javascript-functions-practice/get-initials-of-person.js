/* exported getInitialsOfPerson */

/*  Define a function, named ‘getInitialsOfPerson’, that accepts one argument,person  .
Declare Create a variable named ‘result’, and
assign that value  to { - } .
 person - a JavaScript object with firstName and lastName properties
Return the value of the ‘result’ variable.
The first and last initials of the person.
var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
}; */
function getInitialsOfPerson(person) {
  var result = null;
  result = person.firstName[0] + person.lastName[0];
  return result;
}
