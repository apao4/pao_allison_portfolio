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

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}