function sidebar_open() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("main").style.display = "none";
  document.getElementById("sidebar-button-open").style.display = "none";
  document.getElementById("sidebar-button-close").style.display = "inline-block";
}

function sidebar_close() {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("sidebar-button-close").style.display = "none";
  document.getElementById("sidebar-button-open").style.display = "inline-block";
}
