/* student object */
var student = {
  firstName: 'Holly',
  lastName: 'Phung',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'nomad';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

/* vehicle object */
var vehicle = {
  make: 'Honda',
  model: 's2000',
  year: 2000
};

vehicle['color'] = 'black';

vehicle['isConvertible'] = true;

console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

/* pet object */

var pet = {
  name: 'B',
  type: 'Doberman'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
