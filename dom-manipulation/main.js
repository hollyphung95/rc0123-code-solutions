var clickCount = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', handleClick);

function handleClick(event) {
  updateCount();
  updateClassName();
}

function updateCount() {
  clickCount++;
  $clickCount.textContent = 'Clicks: ' + clickCount;
}

function updateClassName() {
  // less than 4 is "cold"
  if (clickCount < 4) {
    $hotButton.classList = 'hot-button cold';
  } else if (clickCount < 7) {
    $hotButton.classList = 'hot-button cool';
  } else if (clickCount < 10) {
    $hotButton.classList = 'hot-button tepid';
  } else if (clickCount < 13) {
    $hotButton.classList = 'hot-button warm';
  } else if (clickCount < 16) {
    $hotButton.classList = 'hot-button hot';
  } else {
    $hotButton.classList = 'hot-button nuclear';
  }

}
