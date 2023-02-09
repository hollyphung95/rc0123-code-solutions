console.log('hello, world');
var h1Element = document.querySelector('h1');
console.log('the value of  h1 element is ', h1Element);
console.dir(h1Element);

var $explanation = document.querySelector('#explanation');
console.log('the value of the explanation element is ', $explanation);
console.dir($explanation);

var $hint = document.querySelector('.hint');
console.log('the value of  hint element is ', $hint);
console.dir($hint);

var $paragraphs = document.querySelectorAll('p');
console.log('the node list for all the p elements is ', $paragraphs);

var $links = document.querySelectorAll('.example-link');
console.log('the node list for all the elements with the class example-link is ', $links);
