var number = document.querySelectorAll(".original-chapter-link a")[0].textContent.length;
if (number > 70) {
  var content = document.querySelector(".original-chapter-link a").innerHTML;
  var res = content.slice(0, 26);
  var res2 = content.slice(-11);
  document.querySelector(".original-chapter-link a").innerHTML = res + "..." + res2;
}
