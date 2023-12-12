'use strict';
$(document).ready(function() {
  let images = [
    { 
      url: './images/job1.jpg', 
      description: `<div style="color: green;">
                      <h3>One 'Avada Kedavra' A Day, Keeps Muggles Away</h3>
                      <div>
                        <h4 class="prop">Join our ranks to serve both the wizarding and eliminate Muggle communities. 
                        Those who perform exceptionally may find themselves becoming the right-hand of Lord Voldemort himself.</h4>
                        <p>Visit our <a href="Death Eathers' Hub">Death Eathers Are The Best</a> website.</p>
                      </div>
                    </div>`
    },
   
    { 
      url: './images/job2.jpg', 
      description: `<div style="color: red;">
                      <h3>I NEED YOU!</h3>
                      <div>
                        <h4 class="prop">Join our ranks to fight the darkness! Although we will not last for long...</h4>
                        <p>Visit our <a href="Auror">Auror Are The Best</a> website.</p>
                      </div>
                    </div>`
    },
    { 
      url: './images/job3.jpg', 
      description: `<div style="color: blue;">
                      <h3>WE DON'T NEED JUSTICE, WE ARE THE JUSTICE</h3>
                      <div>
                        <h4 class="prop">Join our ranks to define justice in our way! He Is Not Back! And You Must Not Lie!</h4>
                        <p>Visit our <a href="Magical Law Enforcement">Real Justice Suck</a> website.</p>
                      </div>
                    </div>`
    }
  ]; 
  let i = 0;

  $('#image-section').css('background-image', 'url(' + images[0].url + ')');
  $('#description-container').html(images[0].description);

  setInterval(function() {
    i = (i + 1) % images.length; 
    $('#image-section').fadeOut(1000, function() {
      $(this).css('background-image', 'url(' + images[i].url + ')').fadeIn(4000);
      $('#description-container').html(images[i].description); 
    });
  }, 5000); 
});
