// var sampleText = 'grumpy';
var container = document.querySelector('.container');
var p = document.createElement('p');
container.appendChild(p);
var pText = 'grumpy wizards make toxic brew';

for (var i = 0; i < pText.length; i++) {
  var spanEl = document.createElement('span');
  spanEl.innerText = pText.charAt(i);
  p.appendChild(spanEl);
}

reset();
document.addEventListener('keydown', handleToggle);

function handleToggle(event) {
  const target = document.querySelector('.target', 'span');
  if (target.nextElementSibling == null) {
    reset();
  } else if (event.key === target.innerText) {
    target.classList.add('valid');
    target.classList.remove('target');
    target.nextElementSibling.classList.add('target');
    if (target.classList.contains('invalid')) {
      target.classList.remove('invalid');
    }
  } else {
    target.classList.add('invalid');
  }
}

function reset() {
  const allChars = document.querySelectorAll('span');
  const span = document.querySelector('span');
  span.classList.add('target');
  allChars.forEach(char => {
    char.classList.value = '';
  });
  span.classList.add('target');
}
