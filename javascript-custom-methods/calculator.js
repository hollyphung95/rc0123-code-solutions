/* exported calculator */
/* In calculator.js, create an object named calculator with the following methods while refreshing test.html to check your progress:
*/
var calculator = {

  /* returns the sum of x and y */
  add: function (x, y) {
    return x + y;
  },

  /* returns the difference of x and y */
  subtract: function (x, y) {
    return x - y;
  },

  /* returns the product of x and y */
  multiply: function (x, y) {
    return x * y;
  },
  /* returns the quotient of x and y */
  divide: function (x, y) {
    return x / y;
  },
  /* returns the square of x */
  square: function (x) {
    return Math.pow(x, 2);
  },

  /* returns the sum of an array of numbers */
  sumAll: function (numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },

  /* returns the average of an array of numbers */
  getAverage: function (numbers) {
    var total = this.sumAll(numbers);
    var average = this.divide(total, numbers.length);
    return average;
  }
};
