var $openButton = document.createElement('button');
$openButton.classList.add('open-btn');
$openButton.innerText = 'Open Modal';
document.body.appendChild($openButton);

var $container = document.createElement('div');
$container.setAttribute('class', 'container');
document.body.appendChild($container);

var $content = document.createElement('div');
$content.setAttribute('class', 'content');
$container.appendChild($content);

var $textContent = document.createElement('p');
$textContent.classList.add('displayText');
$textContent.innerText = 'Would you like to take a survey?';
$content.appendChild($textContent);

var $noButton = document.createElement('button');
$noButton.classList.add('no-btn');
$noButton.innerText = 'NO';
$content.appendChild($noButton);

function toggleDisplay() {
  var modal = document.querySelector('div');
  if (modal.style.display === 'none') {
    modal.style.display = 'flex';
  } else {
    modal.style.display = 'none';
  }
}

$openButton.addEventListener('click', toggleDisplay);
$noButton.addEventListener('click', toggleDisplay);
