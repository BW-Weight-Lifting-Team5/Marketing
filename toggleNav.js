function myFunction() {
  var x = document.getElementById("toggle-nav");
  if (x.className === "nav-links") {
    x.className += "responsive";
  } else {
    x.className = "nav-links";
  }
}