var $container = document.querySelector('.container');
var $box = document.querySelector('.box');

var index = 0;
var bgColors = ['#fef9f1', '#101010'];
var colors = ['#faea84', '#252525'];
var shadows = ['0 -10px 25px 5px #faec84', '0 -10px 25px 5px rgb(0 0 0 /75%)'];

$box.addEventListener('click', function () {
  $container.style.backgroundColor = bgColors[index];
  $box.style.backgroundColor = colors[index];
  $box.style.boxShadow = shadows[index];
  $box.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
});
