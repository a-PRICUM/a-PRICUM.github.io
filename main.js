var myName = document.getElementById('my-name');
var deg = 0;
function rotateMyName(){
  deg += 5;
  deg %= 360;
  myName.style.transform = 'rotateX(' + deg + 'deg)';
}

setInterval(rotateMyName, 20);
