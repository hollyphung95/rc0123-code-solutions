import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

// import { stdout, stdIn } from 'Process.argv';

// ask user for input
// console.log(process.stdOut('Hey buddy, what would you like to evaluate?')) >>> process.stdin(x, operator, y);
// const userResponse = stdIn;()
const x = Number(process.argv[2]);
const operator = process.argv[3];
const y = Number(process.argv[4]);
this.result = process.argv;

export default function calculate() {
  switch (operator) {
    case '+':
    case 'plus':
      this.result = add(x, y);
      console.log(`The result of ${x} ${operator} ${y} is ${this.result}`);
      break;
    case '-':
    case 'minus':
      this.result = subtract(x, y);
      console.log(`The result of ${x} ${operator} ${y} is ${this.result}`);
      break;
    case '*':
    case 'times':
      this.result = multiply(x, y);
      console.log(`The result of ${x} ${operator} ${y} is ${this.result}`);
      break;
    case '/':
    case 'divided by':
    case 'over':
      this.result = divide(x, y);
      console.log(`The result of ${x} ${operator} ${y} is ${this.result}`);
      break;
    default:
      console.log(`The result of ${x} ${operator} ${y} is invalid`);
  }
  console.log(`The result of ${x} ${operator} ${y} is ${this.result}`);
  return this.result;
}
