// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navDes = document.getElementById("navDes");

// Get the offset position of the navbar
var sticky = navDes.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navDes.classList.add("sticky")
  } else {
    navDes.classList.remove("sticky");
  }
}

// Active nav page
var header = document.getElementById("navDes");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Resume
var waypoint = new Waypoint({
  element:document.getElementById("profile"),
  handler:function(direction){
      this.element.classList.add("fadeIn");
      this.element.classList.add("animated");
      this.element.classList.add("visible")
  },
  offset: "90%"   
})

var waypoint = new Waypoint({  
  element:document.getElementById("experience"),
  handler:function(direction){
      this.element.classList.add("fadeIn");
      this.element.classList.add("animated");
      this.element.classList.add("visible");
  },
  offset: "90%"   
})

var waypoint = new Waypoint({  
  element:document.getElementById("education"),
  handler:function(direction){
      this.element.classList.add("fadeIn");
      this.element.classList.add("animated");
      //this.element.classList.add("see");
  },
  offset: "80%"   
})

var waypoint = new Waypoint({  
  element:document.getElementById("skills"),
  
  handler:function(direction){
      this.element.classList.add("fadeIn");
      this.element.classList.add("animated");
      //this.element.classList.add("see");
  },
  offset: "80%"   
})

var waypoint = new Waypoint({  
  
  element:document.getElementById("contact"),
  handler:function(direction){
      this.element.classList.add("fadeIn");
      this.element.classList.add("animated");
      //this.element.classList.add("see");
  },
  offset: "80%"   
})

var waypoint = new Waypoint({  
  
  element:document.getElementById("traits"),
  handler:function(direction){
      this.element.classList.add("fadeIn");
      this.element.classList.add("animated");
      //this.element.classList.add("see");
  },
  offset: "80%"   
})


// Contact Form Pop Up
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Back to Top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}