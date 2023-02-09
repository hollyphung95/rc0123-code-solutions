/* In main.js, add a single "click" event listener to the .task-list.
In your event listener callback function, log the event.target and the event.target.tagName to the console. Clicking on a <span>, <li>, or <button> should log different values. */

var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', HandleClick);

function HandleClick(event) {
  console.log('event.target : ', event.target);
  console.log('event.target.tagName : ', event.target.tagName);

  /* Back in main.js, if the event.target is one of the <button> elements in the task list, then:
  Get the event.target's closest('.task-list-item') ancestor element.
  Log that .task-list-item element to the console. It should be the parent list item element of the clicked button.
  remove() that .task-list-item element from the DOM */

  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  var $taskListItem = event.target.closest('.task-list-item');
  console.log('Closest .task-list-item ', $taskListItem);
  $taskListItem.remove();
}
