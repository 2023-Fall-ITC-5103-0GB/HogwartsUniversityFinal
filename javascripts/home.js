
//HOME PAGE
//Manage an image slideshow or slider on a web page

//slideIndex is a variable used to keep track of the current slide. It starts at 1.
//The showSlides function is called with the initial slideIndex to display the first slide when the web page is loaded.
let slideIndex = 1;
showSlides(slideIndex); 

//This function increments or decrements the slideIndex by the provided value n and then calls showSlides 
//to display the updated slide.
//The parameter n determines the direction of movement (1 or -1) to go to the next or previous slide.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//This function sets the slideIndex to the provided value n and then calls showSlides 
//to display the corresponding slide.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//the main function for displaying slides in the slideshow.
function showSlides(n) {
  let i;

  //use to fetch lists of elements with the class "mySlides" and "dot" from the HTML file.
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Check whether there are no slides or dots.
  if (slides.length === 0 || dots.length === 0) {
    console.log("No slides or dots found.");
    return;
  }

  /*A loop to checks whether the current slide exceeds the bounds or is less than 1. 
  If the current slide is greater than the number of slides (slides.length), it wraps back to the first slide. 
  If the current slide is less than 1, it wraps to the last slide.*/ 
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  //It then hides all slides by setting their display to "none."
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  //Correspondingly, it removes the "active" class from all dots.
  for (i = 0; i < dots.length; i++) {
    if (dots[i]){
        dots[i].className = dots[i].className.replace(" active", "");
    } 
  }
  //The current slide is displayed by setting its display to "block."
  slides[slideIndex-1].style.display = "block";  

  //The "active" class is added to the corresponding dot to indicate the current slide.
  if(dots[slideIndex -1]){
    dots[slideIndex-1].className += " active";
  }
}

//This event listener ensures that the showSlides function is called when the DOM content is fully loaded.
//It initializes the slideshow when the page is loaded.
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
  });