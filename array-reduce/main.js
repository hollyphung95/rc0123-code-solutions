const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

/* main.js, create the following variables using Array.reduce and log each of them to the console.
sum - all numbers added together
product - all numbers multiplied together
balance - a number that is the result of combining all transactions in account. The correct answer is 180.
composite - an object that is the result of combining all properties of the objects within traits.
composite should come out like this (property order doesn't matter): */
const sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);
console.log('reduced the array to the value sum: ', sum);

const product = numbers.reduce((total, number) => total * number);
console.log('reduced the array to the value product: ', product);

const balance = account.reduce((total, currValue) => { currValue.type === 'deposit' ? total += currValue.amount : total -= currValue.amount; return total; }, 0);
console.log('reduced the list of transactions to the total balance: ', balance);
const composite = traits.reduce((result, trait) => Object.assign(result, trait), {});
console.log('reduced the list of traits to a groupedresult value: ', composite);
