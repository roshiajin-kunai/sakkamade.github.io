// https://stackoverflow.com/questions/1199352/smart-way-to-truncate-long-strings
const LongstringHelper = str => {
  const sliceBoundary = str => str.substr(0, str.lastIndexOf(" "));
  const truncate = (n, useWordBoundary) =>
        str.length <= n ? str : `${ useWordBoundary
          ? sliceBoundary(str.slice(0, n - 1))
          : str.substr(0, n - 1)}&hellip;`;
  return { full: str,  truncate };
};
const longStr = LongstringHelper(document.querySelector("#note .translator-note span#full-note").innerHTML);

// const plain = document.querySelector(".translator-note span#full-note div div");
const lastWord = document.querySelector("#note .translator-note span#full-note");
//  plain.innerHTML =
//   longStr.truncate(+plain.dataset.truncateat, !!+plain.dataset.onword);
lastWord.innerHTML =
  longStr.truncate(+lastWord.dataset.truncateat, !!+lastWord.dataset.onword);
// document.querySelector(".translator-note span#full-note div div").innerHTML = longStr.full;


// click-to-show
function fullNoteFunction() {
	var elementToggler = document.getElementById("toggle-note");
	elementToggler.classList.add("none");
    document.querySelector(".translator-note span#full-note").innerHTML = longStr.full;
}

// none if above is used ???????
// var noteFull = document.querySelector("#note .translator-note span#full-note")[0].textContent;
// var noteLast = noteFull.slice(-1);
// if (noteLast == "&hellip;") {
// } else {
// 	var elementToggler = document.getElementById("toggle-note");
// 	elementToggler.classList.add("none");
// }

// temporary
var noteLength =
  document.querySelectorAll("#note .translator-note span#full-note")[0].textContent.length;
if (noteLength <= 70) {
	var elementToggler = document.getElementById("toggle-note");
	elementToggler.classList.add("none");
}
