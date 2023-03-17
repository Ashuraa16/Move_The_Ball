import "./styles.css";

// document.getElementById("circle").style.top="50";
var circle = document.getElementById("circle");
var i = 0;
var j = 0;
const height = window.innerHeight;
const width = window.innerWidth;
// circle.style.top=height-101+'px';
console.log(height, width);
window.addEventListener("keydown", function (key) {
  var val = key.keyCode;
  if (val == "83") {
    i = i + 50;
    circle.style.top = i + "px";

    if (height - i < 100) {
      i = height - 101;
      circle.style.top = i + "px";

      return;
    }
    console.log(height - i);
    // console.log(circle.style.top);
  }
  if (val == "87") {
    i = i - 50;
    circle.style.top = i + "px";
    if (i < 100) {
      i = 0;
      circle.style.top = i + "px";

      return;
    }
  }
  if (val == "65") {
    j = j - 50;
    circle.style.left = j + "px";
    if (j < 100) {
      j = 0;
      circle.style.left = j + "px";
      return;
    }
  }
  if (val == "68") {
    j = j + 50;
    circle.style.left = j + "px";
    if (width - j < 100) {
      j = width - 101;
      circle.style.left = j + "px";
      return;
    }
  }
});

//w: 87
// a: 65
// s:83
// d: 68
