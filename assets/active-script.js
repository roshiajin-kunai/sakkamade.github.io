// Add active class to the current button (highlight it)
var header = document.getElementById("inner-top-menu");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-menu");
  current[0].className = current[0].className.replace(" active-menu", "");
  this.className += " active-menu";
  });
}