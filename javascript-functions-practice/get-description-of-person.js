/* exported getDescriptionOfPerson */
/*
Define a function, named ‘getDescriptionOfPerson(person)’, that accepts one argument,   ,   .
Declare Create a variable named ‘result’, and
assign that value  to { - } .
 person - a JavaScript object with name, occupation, and birthPlace properties
Return the value of the ‘result’ variable.
A description of the person (see
).
var lea = {
  name: 'Lea Verou',
  occupation: 'software developer',
  birthPlace: 'Lesbos, Greece'
};
function getDescriptionOfPerson(lea)  //  "Lea Verou is a software developer from Lesbos, Greece."

var tim = {
  name: 'Tim Berners-Lee',
  occupation: 'computer scientist',
  birthPlace: 'London, England'
};
function getSecondElement(tim)  //  "Tim Berners-Lee is a computer scientist from London, England."
{

}

/*  */
function getDescriptionOfPerson(person) {
  var description = '';
  description = `${person.name}` + ' is a ' + `${person.occupation}` + ' from ' + `${person.birthPlace}` + '.';
  return description;
}
