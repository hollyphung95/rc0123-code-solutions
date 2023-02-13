
var $name = document.querySelector('#user-name');
$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('change', handleInput);

var $email = document.querySelector('#user-email');
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('change', handleInput);

var $message = document.querySelector('#user-message');
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('change', handleInput);

/* In form-events.js define three functions:
handleFocus(event):
logs a message that the 'focus' event was fired.
logs the event.target.name */
function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name is \t', event.target.name);
}

/* handleBlur(event):
logs a message that the 'blur' event was fired.
logs the event.target.name */
function handleBlur(event) {
  console.log('blur event was fired.');
  console.log('event.target.name is \t', event.target.name);
}

/* handleInput(event):
logs the event.target.name and event.target.value */
function handleInput(event) {
  console.log('event.target.name is : ', event.target.name);
  console.log('event.target.value is : ', event.target.value);
}
