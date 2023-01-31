/* Declare a variable named person */
/* Assign it an object literal with the following three properties */
/* firstName, lastName, hobby */
/* Assign each of the properties an appropriate string value */
var person = {
  firstName: 'Holly',
  lastName: 'Phung',
  hobby: 'none'
};

console.log(person);

/* Declare a variable named fullName */
/* Assign it a concat str of firstName and lastNAme of the person obj */
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

/* Use dot natation to add new property named job to the person obj. */
/* Assign it an appropriate string value */
person.job = 'Pokemon Trainer';
console.log('The person\'s current job is: ', person.job);

/* use dot notation to add another property to the person obj named previousJob */
/* Assign it an appropriate string value */
person.previousJob = 'Master of none';
console.log('The person\'s previous job is: ', person.previousJob);

/* console log the person object */
/* Expand it to get a complete view of all of the object's properties. */
console.log('The complete person object: ', person);
