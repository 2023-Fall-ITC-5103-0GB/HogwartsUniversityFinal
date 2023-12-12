
//Inform feature under development
function functionViewMore(){
  alert('Feature under development, please come back later! Thank you!')
}

//Menu for the moblie screen
function myMenuFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}