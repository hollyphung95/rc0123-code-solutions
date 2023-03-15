const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

/* create the following variables using Array.map and log each of them to the console.
doubled - all numbers multiplied by 2.
prices - all numbers formatted into "$0.00" strings.
upperCased - all languages converted to uppercase.
firstLetters - the first letter of each language.
Open index.html in your browser and check the values you logged to the console.
Tips!
All Numbers have a toFixed method.
All Strings have a toUpperCase method.
All Strings can be indexed into like Arrays. */
const doubled = numbers.map(num => num * 2);
console.log(doubled);
const prices = numbers.map(num => `$${num.toFixed(2)}`);
console.log(prices);

const upperCased = languages.map(lang => lang.toUpperCase());
console.log(upperCased);
const firstLetters = languages.map(lang => lang[0]);
console.log(firstLetters);
