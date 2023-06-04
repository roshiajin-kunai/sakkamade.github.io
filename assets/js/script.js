//  When the user clicks on the button,
//  toggle between hiding and showing the dropdown content (w3school)
//  https://www.w3schools.com/howto/howto_js_dropdown.asp
function dropFunction() {
    document.getElementById("drop").classList.toggle("drop-content-v");
}

function dropToc(element) {
    document.getElementById("z-drop-toc").classList.toggle("drop-content-v");

    document.getElementById(element).scrollIntoView();
    window.scrollTo(0,0);
}

// Close the dropdown menu if the user clicks outside of it
// however not for tablet
if (window.innerWidth > 770) {
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
}

// Close one drop down when another is open ???

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

// https://stackoverflow.com/questions/22270664/how-to-remove-a-class-from-elements-in-pure-javascript#22270709
function collapseAll() {
    var elems = document.querySelectorAll(".drop-content.drop-content-v");

[].forEach.call(elems, function(el) {
    el.classList.remove("drop-content-v");
});
}
