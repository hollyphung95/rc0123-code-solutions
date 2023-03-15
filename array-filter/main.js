const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
  'david'
];

/*  In main.js, create the following variables using Array.filter and log each of them to the console.
evenNumbers - all numbers that are divisible by 2.
overFive - all numbers that are greater than 5.
startWithE - all names that start with a 'E'.
haveD - all names that include a 'D' or a 'd'. */

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
const overFive = numbers.filter(num => num > 5);
console.log(overFive);
const startWithE = names.filter(name => name[0] === 'E');
console.log(startWithE);
const startWithLetterD = names.filter(name => name[0] === 'D' || name[0] === 'd');
console.log(startWithLetterD);
