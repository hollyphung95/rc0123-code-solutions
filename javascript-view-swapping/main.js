var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewContainer = document.querySelector('.view-container');
var $viewNodeList = document.querySelectorAll('.view');

for (var i = 0; i < $tabNodeList.length; i++) {
  $tabContainer.append($tabNodeList[i]);
  $viewContainer.append($viewNodeList[i]);
}

$tabContainer.addEventListener('click', handleClick);
function handleClick(event) {
  var dataViewAttr = event.target.getAttribute('data-view');

  for (var i = 0; i < $tabNodeList.length; i++) {
    $tabNodeList[i].className = 'tab';
    $viewNodeList[i].className = 'view hidden';
  }
  if (dataViewAttr === 'html') {
    $tabNodeList[0].className = 'tab active';
    $viewNodeList[0].className = 'view';
  } else if (dataViewAttr === 'css') {
    $tabNodeList[1].className = 'tab active';
    $viewNodeList[1].className = 'view';
  } else if (dataViewAttr === 'javascript') {
    $tabNodeList[2].className = 'tab active';
    $viewNodeList[2].className = 'view';
  } else {
    $tabNodeList[0].className = 'tab active';
    $viewNodeList[0].className = 'view';
  }
}
