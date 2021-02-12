function classSwitch() {
	var element = document.getElementById("note");
	element.classList.remove("cropped");
	var element = document.getElementById("note-overlay");
	element.classList.remove("note-overlay");
}

// https://www.w3schools.com/howto/howto_js_dropdown.asp
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show-dropdown");
	document.getElementById("closed").classList.toggle("drop-opened");
	document.getElementById("closed").classList.toggle("drop-closed");
}
