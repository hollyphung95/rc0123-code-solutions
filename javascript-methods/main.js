var num1 = 10;
var num2 = 5;
var num3 = 15;

var maximumValue = Math.max(num1, num2, num3);
console.log('the value of maximumValue is ', maximumValue);

var heroes = ['Spiderman', 'wonderwoman', 'black panther', 'jack-jack'];

var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('the value of randomIndex is ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('the value of randomHero is ', randomHero);

/* Array Methods */
var library = [
  {
    title: 'Green Eggs and Ham',
    author: 'Dr.Suess'
  },
  {
    title: 'Rumple Buttercup: A story of bananas, belonging, and being yourself',
    author: 'Matthew Gubler'
  },
  {
    title: 'The Cat in the Hat',
    author: 'Dr.Suess'
  }
];
var lastBook = library.pop();
console.log('the value of lastBook is ', lastBook);

var firstBook = library.shift();
console.log('the value of firstBook is ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('the value of library is ', library);

/* string methods */
var fullName = 'Holly Phung';
var firstAndLastName = fullName.split(' ');
console.log('the value of firstAndLastName is ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('the value of sayMyName is ', sayMyName);
