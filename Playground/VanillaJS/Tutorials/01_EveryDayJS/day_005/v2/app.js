var leftClickListener = document.getElementById("left-button");
var rightClickListener = document.getElementById("right-button");
var leftDisplay = document.getElementById("left-display");
var rightDisplay = document.getElementById("right-display");
var leftClicks = 0;
var rightClicks = 0;
var leftImage = document.getElementById("left-image");
var rightImage = document.getElementById("right-image");

var leftIncrement = function() {
  leftDisplay.innerHTML = ++leftClicks;
  compareClicks();
}

var rightIncrement = function() {
  rightDisplay.innerHTML = ++rightClicks;
  compareClicks();
}

function compareClicks(){
  if (rightClicks > leftClicks) {
    rightImage.src = "img/happy.png";
    leftImage.src = "img/sad.png";
  } else if (leftClicks === rightClicks) {
    leftImage.src = "img/sad.png";
    rightImage.src = "img/sad.png";
  } else {
    rightImage.src = "img/sad.png";
    leftImage.src = "img/happy.png";
  }
}

leftClickListener.addEventListener("click", leftIncrement);
rightClickListener.addEventListener("click", rightIncrement);
