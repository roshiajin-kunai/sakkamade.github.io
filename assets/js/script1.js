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
      linkRes1 + "&hellip;" + linkRes2;
} else {
    var linkContent =
        document.querySelector(".original-chapter-link a").innerHTML;
    var strippedlinkContent =
        linkContent.replace(/http:\/\/|https:\/\//gi, '');
    document.querySelector(".original-chapter-link a").innerHTML =
        strippedlinkContent;
}
