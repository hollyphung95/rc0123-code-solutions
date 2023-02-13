var library = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('library contains : ', library);
console.log('\nlibrary typeof : ', typeof library);

var stringifiedLibrary = JSON.stringify(library);
console.log('stringifiedLibrary contains :  stringifiedLibrary');
console.log('\nstringifiedLibrary typeof : ', typeof stringifiedLibrary);

var studentJSON = '{"id": 1, "name": "Sosal distaunce"}';
console.log('studentJSON contains : ', studentJSON);
console.log('\nstudentJSON typeof : ', typeof studentJSON);

var student = JSON.parse(studentJSON);
console.log('parsedStudent value is : ', student);
console.log('\nparsedStudent typeof : ', typeof student);
