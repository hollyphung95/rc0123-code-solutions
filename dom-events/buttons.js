
/* Query the DOM for the button with a class attribute of 'click-button' and assign the button element object to a new variable. */
// Grab the button element of the document and store it in a variable
var $clickBtnElementObj = document.querySelector('.click-button');

/* Set up your handleClick function as a 'click' event listener on the button element object. */
$clickBtnElementObj.addEventListener('click', handleClick);

/* Define a function named handleClick with one parameter: event. This function should:
log the message 'button clicked' to the console
log the event object to the console
log the target property of the event object to the console */
function handleClick(event) {
  console.log('button clicked!');
  console.log('\nevent Object is :\n ', event);
  console.log('\ntarget property of the event Object is :\n ', event.target);
}

// Grab the button element of the document and store it in a variable
var $hoverBtnElementObj = document.querySelector('.hover-button');
/* Set up your handleClick function as a 'click' event listener on the button element object. */
$hoverBtnElementObj.addEventListener('mouseover', handleMouseover);

/* Define a function named handleMouseover with one parameter: event. This function should:
log the message 'button hovered' to the console
log the event object to the console
log the target property of the event object to the console
Query the DOM for the button with a class attribute of hover-button and assign the button element object to a new variable.
Set up your handleMouseover function as a 'mouseover' event listener on the button element object.
Test your event listener in the browser by hovering your mouse over the button that says "Hover Me!" while your console is open. */
function handleMouseover(event) {
  console.log('button hovered');
  console.log('\nevent Object is :\n ', event);
  console.log('\ntarget property of the event Object is :\n ', event.target);
}

// Grab the button element of the document and store it in a variable
var $dblClickBtnElementObj = document.querySelector('.double-click-button');
/* Set up your handleClick function as a 'click' event listener on the button element object. */
$dblClickBtnElementObj.addEventListener('dblclick', handleDoubleClick);

/* Define a function named handleDoubleClick with one parameter: event. This function should:
log the message 'button double clicked' to the console
log the event object to the console
log the target property of the event object to the console */
function handleDoubleClick(event) {
  console.log('double-clicked');
  console.log('\nevent Object is :\n ', event);
  console.log('\ntarget property of the event Object is :\n ', event.target);
}
