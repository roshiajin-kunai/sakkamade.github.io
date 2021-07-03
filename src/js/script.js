//  When the user clicks on the button,
//  toggle between hiding and showing the dropdown content (w3school)
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

// Toggle between showing and hiding the navigation menu
// links when the user clicks on the hamburger menu bar icon
function navMenuFunction() {
    var x = document.getElementById("nav-item");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// visually cut long links
var linkLength =
  document.querySelectorAll(".original-chapter-link a")[0].textContent.length;
if (linkLength > 70) {
    var linkContent =
      document.querySelector(".original-chapter-link a").innerHTML;
    var strippedlinkContent =
      linkContent.replace(/http:\/\/|https:\/\//gi, '');
    var linkRes1 =
      strippedlinkContent.split("/", 2).join("/");
    var linkRes2 =
      strippedlinkContent.split("/").pop();
    document.querySelector(".original-chapter-link a").innerHTML =
      linkRes1 + "..." + linkRes2;
} else {
    var linkContent =
      document.querySelector(".original-chapter-link a").innerHTML;
    var strippedlinkContent =
      linkContent.replace(/http:\/\/|https:\/\//gi, '');
    document.querySelector(".original-chapter-link a").innerHTML =
      strippedlinkContent;
}
