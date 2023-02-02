/* The colors Array */
// In main.js, create an array literal containing the strings 'red', 'white', and 'blue' and assign it to a new variable named colors.
var colors = ['red', 'white', 'blue'];

// Access the value at each index of the colors array and log them one-by-one, like the first three lines of the log output in the example image below.
for (var index in colors) {
  console.log('At index ', index, ' the value is ', colors[index]);
}

// Create a string using concatenation (+) and each value of the colors array and log it to the console.
// The string should read: America is red, white, and blue.
var concatStr = 'America is ';
for (var i = 0; i < colors.length; i++) {
  if (i === colors.length - 1) {
    concatStr += colors[i] + '.';
  } else {
    concatStr += colors[i] + ', ';
  }
}
console.log('the result of the concatenated string is \n', concatStr);

// Assign the string 'green' to index 2 of the colors array.
colors[2] = 'green';

// Create another string using concatenation (+) and each value of the colors array and log it to the console.
// The string should read: Mexico is red, white, and green.
concatStr = 'Mexico is ';
for (i = 0; i < colors.length; i++) {
  if (i === colors.length - 1) {
    concatStr += colors[i] + '.';
  } else {
    concatStr += colors[i] + ', ';
  }
}
console.log('the result of the concatenated string is \n', concatStr);

// Log the value of the colors array to the console.
console.log('the result of colors is \n', colors);

/* The students Array */
// Create a new array literal containing four strings and assign it to a new variable named students.
// Each string should be a person's name.
var students = ['Andrew', 'Heerak', 'Holly', 'Jonah'];

// Use dot notation to access the length property of the students array and assign it to a new variable named numberOfStudents.
var numberOfStudents = students.length;

// Log the value of numberOfStudents to the console within a string like in the example log output below.
console.log('the value of numberOfStudents is ', numberOfStudents);

// Subtract 1 from the numberOfStudents and store the result in a new variable named lastIndex.
var lastIndex = numberOfStudents - 1;

// Use lastIndex as an array index to access the last element of the students array and assign it to the variable lastStudent.
var lastStudent = students[lastIndex];

// Log the value of lastStudent to the console within a string like in the example log output below.
console.log('the value of lastStudent is ', lastStudent);

// Log the value of the students array to the console.
console.log('the value of the students array is ', students);
