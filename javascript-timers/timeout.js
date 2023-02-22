/* eslint-disable no-unused-vars */
var $heading = document.querySelector('.message');

function helloThere() {
  $heading.textContent = 'Hello There';
}
var timer = setTimeout(helloThere(), 2000);
