/* exported student */
/* firstName - a string containing your first name
lastName - a string containing your last name
subject - a string containing your favorite subject (it's JavaScript, right? 😉)
getFullName - a function that returns the student's firstName and lastName separated by a space.
The function should use the firstName and lastName properties of this.
getIntroduction - a function that returns a string introduction like so:
"Hello, my name is Warby Parker and I am studying optometry.".
The function should use the firstName, lastName, and subject properties of this.
*/

var student = {
  firstName: 'Holly',
  lastName: 'Phung',
  subject: 'mastering the art of none',

  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },

  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }

};
