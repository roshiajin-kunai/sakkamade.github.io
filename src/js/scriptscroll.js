// https://github.com/krvikash35/js-auto-hide-header-onscroll
var lastKnownScrollY = 0;
var currentScrollY = 0;
var ticking = false;
var idOfHeader = 'scroll-btn';
var eleHeader = null;


const classes = {
  pinned: 'btn-pin',
  unpinned: 'btn-unpin',
};


function onScroll() {
  currentScrollY = window.pageYOffset;
  requestTick();
}


function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

function update() {
  if (currentScrollY < lastKnownScrollY) {
    pin();
  } else if (currentScrollY > lastKnownScrollY) {
    unpin();
  }
  lastKnownScrollY = currentScrollY;
  ticking = false;
}


function pin() {
  if (eleHeader.classList.contains(classes.unpinned)) {
    eleHeader.classList.remove(classes.unpinned);
    eleHeader.classList.add(classes.pinned);
  }
}


function unpin() {
  if (eleHeader.classList.contains(classes.pinned) || !eleHeader.classList.contains(classes.unpinned)) {
    eleHeader.classList.remove(classes.pinned);
    eleHeader.classList.add(classes.unpinned);
  }
}

window.onload = function(){
  eleHeader = document.getElementById(idOfHeader);
  console.log(eleHeader);
  document.addEventListener('scroll', onScroll, false);
}

// w3school
//Get the button
var mybutton = document.getElementById("scroll-btn");

// When the user scrolls down 260px from the top of the document, show the button
window.onscroll = function() {scrollFunction(); scrolldownFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Get to-bottom button
var mydownbutton = document.getElementById("scroll-down-btn");

// When the user scrolls down 260px from the top of the document, hide the button
function scrolldownFunction() {
  if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
    mydownbutton.style.display = "none";
  } else {
    mydownbutton.style.display = "block";
  }
}

// https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
scrollingElement = (document.scrollingElement || document.body)
function scrollToBottom () {
   scrollingElement.scrollTop = scrollingElement.scrollHeight;
}
