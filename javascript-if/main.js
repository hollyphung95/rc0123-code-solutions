/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

/* Parameters - number - a JavaScript number
Return Value - A boolean indicating whether or not number is less than five. */
function isUnderFive(number) {
  var returnValue = false;
  if (number < 5) {
    returnValue = true;
  }
  return returnValue;
}

/* Parameter - number - a JavaScript number
Return Value- A boolean indicating whether or not number is evenly divisible by 2. */
function isEven(number) {
  var returnValue = false;
  if (number % 2 === 0) {
    returnValue = true;
  }
  return returnValue;
}

/* Parameter - string - any JavaScript string
Return Value - A boolean indicating whether or not
the first character in string is a capital 'J'. */
function startsWithJ(string) {
  var returnValue = false;
  if (string[0] === 'J') {
    returnValue = true;
  }
  return returnValue;
}

/* Parameter - person - an object with name (a string) and age (a number) properties
Return Value - A boolean indicating whether or not
the person is of legal drinking age (at least 21). */
function isOldEnoughToDrink(person) {
  var returnValue = false;
  if (person.age >= 21) {
    returnValue = true;
  }
  return returnValue;
}

/* Parameter - person - an object with name (a string) and age (a number) properties
Return Value - A boolean indicating whether or not
the person is of legal driving age (at least 16). */
function isOldEnoughToDrive(person) {
  var returnValue = false;
  if (person.age >= 16) {
    returnValue = true;
  }
  return returnValue;
}

/* isOldEnoughToDrinkAndDrive(person)
Parameters - person - an object with name (a string) and age (a number) properties
Return Value - false */
function isOldEnoughToDrinkAndDrive(person) {
  var returnValue = false;
  if (person.age >= 16 && person.age >= 21) {
    return returnValue;
  }
  return returnValue;
}

/* Parameters - pH - A number representing the pH level of a substance
Return Value - A string describing the pH level of a substance in plain English.
Valid pH levels go from 0 to 14.
7 is "neutral"
anything from 0 up to 7 is "acid"
anything from 14 down to 7 is "base"
anything else is an "invalid pH level"
*/
function categorizeAcidity(pH) {
  var returnValue = '';
  if (pH === 7) {
    returnValue = 'neutral';
  } else if (pH > 0 && pH < 7) {
    returnValue = 'acidic';
  } else if (pH > 7 && pH <= 14) {
    returnValue = 'base';
  } else {
    returnValue = 'invalid pH level';
  }
  return returnValue;
}

/* introduceWarnerBro(name)
Parameters - name - a string representing the name of one of the Warner Bros.
Return Value - Depending on the name of the character, may return a different catch-phrase.
"yakko" and "wakko" both say "We're the warner brothers!",
but "dot" says "I'm cute~".

If the input string is neither "yakko", "wakko", nor "dot",
then the function simply returns "Goodnight everybody!".
 */
function introduceWarnerBro(name) {
  var returnValue = '';
  if (name === 'yakko' || name === 'wakko') {
    returnValue = 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    returnValue = 'I\'m cute~';
  } else {
    returnValue = 'Goodnight everybody!';
  }
  return returnValue;
}
