// https://stackoverflow.com/questions/1199352/smart-way-to-truncate-long-strings
const LongstringHelper = str => {
    const sliceBoundary = str => str.substr(0, str.lastIndexOf(" "));
    const truncate = (n, useWordBoundary) =>
        str.length <= n ? str : `${ useWordBoundary
            ? sliceBoundary(str.slice(0, n - 1))
            : str.substr(0, n - 1)}&#8228;&#8203;&nldr;`;
    return { full: str,  truncate };
};

var longStr =
    LongstringHelper(document.querySelector("#note .translator-note span#full-note").innerHTML);

// const plain = document.querySelector(".translator-note span#full-note div div");
var lastWord =
    document.querySelector("#note .translator-note span#full-note");
//  plain.innerHTML =
//   longStr.truncate(+plain.dataset.truncateat, !!+plain.dataset.onword);
lastWord.innerHTML =
    longStr.truncate(+lastWord.dataset.truncateat, !!+lastWord.dataset.onword);
// document.querySelector(".translator-note span#full-note div div").innerHTML = longStr.full;


// click-to-show
function fullNoteFunction() {
    var elementToggler =
        document.getElementById("toggle-note");
    elementToggler.classList.add("none");

    document.querySelector(".translator-note span#full-note").innerHTML =
        longStr.full;
}


// none if above is used
var noteContent =
    document.querySelector(".translator-note #full-note").innerHTML;
var noteLast =
    noteContent.slice(-3);
if (noteLast === `․​‥`) {
} else {
    var elementToggler =
        document.getElementById("toggle-note");
    elementToggler.classList.add("none");
}
