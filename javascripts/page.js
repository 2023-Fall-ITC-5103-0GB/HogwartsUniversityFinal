// page.js
document.addEventListener("DOMContentLoaded", function () {
    function toggleDetails(detailsId) {
      var detailsContainer = document.getElementById(detailsId);
      // Toggle the visibility by changing the display property
      detailsContainer.style.display = detailsContainer.style.display === "none" ? "block" : "none";
    }
  
    // Expose the toggleDetails function to the global scope
    window.toggleDetails = toggleDetails;
  });
  // Function to toggle the contact method details based on the selected option
  function toggleContactMethod() {
    var contactMethod = document.getElementById("contactMethod").value;
    var vyDetails = document.getElementById("vy-details");
  
    // Hide all contact method details
    vyDetails.querySelector(".email-details").style.display = "none";
    vyDetails.querySelector(".phone-details").style.display = "none";
    vyDetails.querySelector(".post-details").style.display = "none";
  
    // Show the selected contact method detail
    vyDetails.querySelector("." + contactMethod + "-details").style.display = "block";
  }
  document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var currentUrl = window.location.pathname;
  
    // Update the active link in the navigation bar
    var navLinks = document.querySelectorAll('.text_menu');
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active'); // Add a class for styling the active link
        }
    });
  });
  // Countdown Timer
  function updateCountdown() {
    var deadline = new Date("December 31, 2023 23:59:59").getTime();
    var now = new Date().getTime();
    var timeDifference = deadline - now;
  
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
    if (timeDifference <= 0) {
        countdownElement.innerHTML = "Application Closed";
    }
  }
  
  // Call the countdown function every second
  setInterval(updateCountdown, 1000);
  // JavaScript code for toggling details and contact methods
  function toggleDetails(detailsId) {
    var detailsContainer = document.getElementById(detailsId);
    if (detailsContainer.style.display === "none") {
      detailsContainer.style.display = "block";
    } else {
      detailsContainer.style.display = "none";
    }
  }
  
  function toggleContactMethod(detailsId) {
    var selectElement = document.getElementById(detailsId + '-contact');
    var selectedValue = selectElement.value;
  
    // Check if the selected value is 'email', 'phone', or 'post'
    if (selectedValue === 'email' || selectedValue === 'phone' || selectedValue === 'post') {
      // Show alert only for Hogwarts students
      alert("This contact method is available only for Hogwarts students.");
    }
  
    // Hide all contact method details
    var emailDetails = document.getElementById(detailsId + '-email-details');
    emailDetails.style.display = "none";
    var phoneDetails = document.getElementById(detailsId + '-phone-details');
    phoneDetails.style.display = "none";
    var postDetails = document.getElementById(detailsId + '-post-details');
    postDetails.style.display = "none";
  
    // Show the selected contact method details
    switch (selectedValue) {
      case 'email':
        emailDetails.style.display = "block";
        break;
      case 'phone':
        phoneDetails.style.display = "block";
        break;
      case 'post':
        postDetails.style.display = "block";
        break;
      default:
        break;
    }
  }
  
  
  