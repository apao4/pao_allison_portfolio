// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navTab = document.getElementById("navTab");

// Get the offset position of the navbar
var sticky = navTab.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navTab.classList.add("sticky")
  } else {
    navTab.classList.remove("sticky");
  }
}
