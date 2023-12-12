'use strict';
// Enable strict mode for better error checking and improved JavaScript execution.

$(document).ready(function() {
    let languageData = {};

    // Function to load multi-language data from the 'javascripts' folder.
    function loadLanguageData() {
        $.getJSON('./javascripts/job.json', function(data) {
            languageData = data;
            updateContent('english'); // Default to English or set your default language.
        });
    }

    // Function to update content based on the selected language.
    function updateContent(lang) {
        if (languageData[lang]) {
            $('#description-container').html(languageData[lang]['job1_description']);
            $('[data-key]').each(function() {
                var key = $(this).data('key');
                if (languageData[lang][key]) {
                    $(this).text(languageData[lang][key]);
                }
            });
        }
    }

    // Event listener for language selection changes.
    $('#language').change(function() {
        updateContent(this.value);
    });

    // Load the language data.
    loadLanguageData();

    // Image slideshow functionality.
    let images = [
        {
            url: './images/job1.jpg', 
                // images description content
            description: `<div style="color: black;">
                            <h3 class="pointer">One 'Avada Kedavra' A Day, Keeps Muggles Away</h3>
                            <p class="prop">Join our ranks to serve both the wizarding and eliminate Muggle communities. 
                            Those who perform exceptionally may find themselves becoming the right-hand of Lord Voldemort himself.</p>
                            <p class="prop">Visit our <a href="Death Eathers' Hub">Death Eathers Are The Best</a> website.</p>
                          </div>`
        },
        {
            url: './images/job2.jpg', 
             // images description content
            description: `<div style="color: black;">
                            <h3 class="pointer">I NEED YOU!</h3>
                            <p class="prop">Join our ranks to fight the darkness! Although we will not last for long...</p>
                            <p class="prop">Visit our <a href="Auror">Auror Are The Best</a> website.</p>
                          </div>`
        },
        {
            url: './images/job3.jpg', 
             // images description content
            description: `<div style="color: black;">
                            <h3 class="pointer">WE DON'T NEED JUSTICE, WE ARE THE JUSTICE</h3>
                            <p class="prop">Join our ranks to define justice in our way! He Is Not Back! And You Must Not Lie!</p>
                            <p class="prop">Visit our <a href="Magical Law Enforcement">Real Justice Suck</a> website.</p>
                          </div>`
        }
       
    ];

    // Initial setup for the slideshow.
    let i = 0;
    if(images.length > 0) {
        $('#image-section').css('background-image', 'url(' + images[0].url + ')');
        $('#description-container').html(images[0].description);

        // Interval function to cycle through images and descriptions.
        setInterval(function() {
            i = (i + 1) % images.length;
            $('#image-section').fadeOut(1000, function() {
                $(this).css('background-image', 'url(' + images[i].url + ')').fadeIn(1000);
                $('#description-container').html(images[i].description);
            });
        }, 8000); // Change image every 8000 milliseconds (8 seconds).
    }


  // Event handler for the search button click
  $('#button1').click(function() {
    var searchQuery = $('#input1').val(); // Retrieve the keyword from the input field

    // Check if the input is empty (or only contains white spaces)
    if (searchQuery.trim() === "") {
        alert("Please enter a keyword to search."); // // If input is empty, display an error message
        return; // Exit the function, do not proceed with search
    }

    var searchUrl = "https://harrypotter.fandom.com/wiki/Jobs_in_the_wizarding_wo" + encodeURIComponent(searchQuery);
    window.open(searchUrl, '_blank'); 
  });// open search in new page
});
