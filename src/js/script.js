/*
 * When the user clicks on the button,
 * toggle between hiding and showing the dropdown content
 */
function dropFunction() {
    document.getElementById("drop").classList.toggle("drop-content-v");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.nav-dropbtn')) {
        var dropdowns = document.getElementsByClassName("drop-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('drop-content-v')) {
            openDropdown.classList.remove('drop-content-v');
        }
        }
    }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navMenuFunction() {
  var x = document.getElementById("nav-item");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function fullNoteFunction() {
	var element = document.getElementById("truncated-note");
	var element2 = document.getElementById("toggle-note");
	element.classList.add("none");
	element2.classList.add("none");
	var element = document.getElementById("full-note");
	element.classList.remove("none");
}

// visually cut long links
var number = document.querySelectorAll(".original-chapter-link a")[0].textContent.length;
if (number > 70) {
  var content = document.querySelector(".original-chapter-link a").innerHTML;
  var res = content.slice(0, 26);
  var res2 = content.slice(-11);
  document.querySelector(".original-chapter-link a").innerHTML = res + "..." + res2;
}
