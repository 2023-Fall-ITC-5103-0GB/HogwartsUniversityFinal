

//Sign-in page JavaScript
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.hey').addEventListener('click', function (event) {
        validateForm(event);
    });
});

function validateForm(event) {
    event.preventDefault(); // prevent form submission
    validateUsername();
    validatePassword();
     // Check if there are no error messages, then proceed with submission
     if (!document.querySelector('.error-message').textContent.trim()) {
      submitForm();
  }
}

function validateUsername() {
    let uname2 = document.querySelector('#uname');
    let unameError = document.querySelector('.username-error');
    let namePattern = /^H\d{6}$/;
    if (uname2.value == '') {
        uname2.nextElementSibling.innerHTML = 'Please enter a username.';
    } else if (!namePattern.test(uname2.value)) {
        uname2.nextElementSibling.innerHTML =
            'Username should start with H and be followed by 6 digits.';
    } else {
        uname2.nextElementSibling.innerHTML = '';
    }
}

function validatePassword() {
    let psw2 = document.querySelector('#psw');
    let passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (psw2.value == '') {
        psw2.nextElementSibling.innerHTML = 'Please enter a password.';
    } else if (!passwordPattern.test(psw2.value)) {
       psw2.nextElementSibling.innerHTML ='Password must contain at least one letter, one number, and one special character.';
    } else {
        psw2.nextElementSibling.innerHTML = '';
    }
}


const resetForm = () => {
    // Clear error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((errorMsg) => {
        errorMsg.innerHTML = '';
    });

    // Reset form fields
    document.querySelector('.form1').reset();

    // Set focus to the username field
    document.querySelector('#uname').focus();
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.cancelbtn').addEventListener('click', resetForm);
    document.querySelector('#uname').focus();
});


//Health.html page JavaScript
document.addEventListener('DOMContentLoaded', function () {
    var doctorImages = document.querySelectorAll('.doctor-list img');
    doctorImages.forEach(function (doctor) {
        doctor.addEventListener('click', function () {
            doctor.style.transform = 'translateY(10px)'; 
        });
    });
});

//Admission.html page
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('gendero').addEventListener('change', function () {
//         document.getElementById('otherGenderSpecify').style.display = this.checked ? 'block' : 'none';
//     });

//     window.onload = function () {
//         document.getElementById('submit').onclick = validate;
//         document.getElementById('reset_form').onclick = resetForm;
//     };

//     // Validate FirstName
//     function validate() {
//         let fname2 = document.querySelector('#fname');
//         let namePattern = /^[a-zA-Z]{2,30}$/;
//         if (fname2.value == '') {
//             fname2.nextElementSibling.innerHTML = 'Please enter first name';
//         } else if (!namePattern.test(fname2.value)) {
//             fname2.nextElementSibling.innerHTML =
//                 'Please enter first name with letters only';
//         } else {
//             fname2.nextElementSibling.innerHTML = '';
//         }

//         // Validate LastName
//         let lname2 = document.querySelector('#lname');
//         let namePattern1 = /^[a-zA-Z]{2,30}$/;
//         if (lname2.value == '') {
//             lname2.nextElementSibling.innerHTML = 'Please enter last name';
//         } else if (!namePattern1.test(lname2.value)) {
//             lname2.nextElementSibling.innerHTML =
//                 'Please enter last name with letters only';
//         } else {
//             lname2.nextElementSibling.innerHTML = '';
//         }

//         // Validate email address
//         let email2 = document.querySelector('#email_address');
//         let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (email2.value === '') {
//             email2.nextElementSibling.innerHTML = 'Please enter an email address';
//         } else if (!emailPattern.test(email2.value)) {
//             email2.nextElementSibling.innerHTML = 'Please enter a valid email address';
//         } else {
//             email2.nextElementSibling.innerHTML = '';
//         }

//         // Validate phone number
//         let phone2 = document.querySelector('#phone');
//         let phonePattern = /^\d+$/;
//         if (phone2.value === '') {
//             phone2.nextElementSibling.innerHTML = 'Please enter a phone number';
//         } else if (!phonePattern.test(phone2.value)) {
//             phone2.nextElementSibling.innerHTML = 'Please enter a valid phone number with numbers only';
//         } else {
//             phone2.nextElementSibling.innerHTML = '';
//         }

//         // Validate country 
//         let country2 = document.querySelector('#country');
//         let countryPattern = /^[a-zA-Z]{2,30}$/;
//         if (country2.value == '') {
//             country2.nextElementSibling.innerHTML = 'Please enter country name';
//         } else if (!countryPattern.test(country2.value)) {
//             country2.nextElementSibling.innerHTML =
//                 'Please enter country name with letters only';
//         } else {
//             country2.nextElementSibling.innerHTML = '';
//         }

//         let message = document.createElement('hello');
//         message.textContent = 'Thanks for applying! We will be back with you soon ';
//         document.querySelector('#confirmation2').appendChild(message);
     

//     // Reset form
//     function resetForm() {
//         // Clear values in form fields
//         document.getElementById('fname').value = '';
//         document.getElementById('lname').value = '';
//         document.getElementById('email_address').value = '';
//         document.getElementById('phone').value = '';
//         document.getElementById('country').value = '';

//         // Clear error messages
//         document.querySelector('#fname').nextElementSibling.innerHTML = '';
//         document.querySelector('#lname').nextElementSibling.innerHTML = '';
//         document.querySelector('#email_address').nextElementSibling.innerHTML = '';
//         document.querySelector('#phone').nextElementSibling.innerHTML = '';
//         document.querySelector('#country').nextElementSibling.innerHTML = '';
//     }
// };

// function toggleChat() {
//   const chatPopup = document.getElementById("chat-popup");
//   chatPopup.style.display = (chatPopup.style.display === "none") ? "block" : "none";
// }

// function sendMessage() {
//   const messageInput = document.getElementById("message-input");
//   const message = messageInput.value.trim();

//   if (message !== "") {
//       // Display the message in the chat window
//       const chatContent = document.getElementById("chat-content");
//       chatContent.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

//       // Clear the input field
//       messageInput.value = "";
//   }
// }

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('gendero').addEventListener('change', function () {
        document.getElementById('otherGenderSpecify').style.display = this.checked ? 'block' : 'none';
    });

    window.onload = function () {
        document.getElementById('submit').onclick = validate;
        document.getElementById('reset_form').onclick = resetForm;
    };

    // Validate FirstName
    function validate() {
        let fname2 = document.querySelector('#fname');
        let namePattern = /^[a-zA-Z]{2,30}$/;
        if (fname2.value == '') {
            fname2.nextElementSibling.innerHTML = 'Please enter first name';
        } else if (!namePattern.test(fname2.value)) {
            fname2.nextElementSibling.innerHTML =
                'Please enter first name with letters only';
        } else {
            fname2.nextElementSibling.innerHTML = '';
        }

        // Validate LastName
        let lname2 = document.querySelector('#lname');
        let namePattern1 = /^[a-zA-Z]{2,30}$/;
        if (lname2.value == '') {
            lname2.nextElementSibling.innerHTML = 'Please enter last name';
        } else if (!namePattern1.test(lname2.value)) {
            lname2.nextElementSibling.innerHTML =
                'Please enter last name with letters only';
        } else {
            lname2.nextElementSibling.innerHTML = '';
        }

        // Validate email address
        let email2 = document.querySelector('#email_address');
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email2.value === '') {
            email2.nextElementSibling.innerHTML = 'Please enter an email address';
        } else if (!emailPattern.test(email2.value)) {
            email2.nextElementSibling.innerHTML = 'Please enter a valid email address';
        } else {
            email2.nextElementSibling.innerHTML = '';
        }

        // Validate phone number
        let phone2 = document.querySelector('#phone');
        let phonePattern = /^\d+$/;
        if (phone2.value === '') {
            phone2.nextElementSibling.innerHTML = 'Please enter a phone number';
        } else if (!phonePattern.test(phone2.value)) {
            phone2.nextElementSibling.innerHTML = 'Please enter a valid phone number with numbers only';
        } else {
            phone2.nextElementSibling.innerHTML = '';
        }

        // Validate country 
        let country2 = document.querySelector('#country');
        let countryPattern = /^[a-zA-Z]{2,30}$/;
        if (country2.value == '') {
            country2.nextElementSibling.innerHTML = 'Please enter country name';
        } else if (!countryPattern.test(country2.value)) {
            country2.nextElementSibling.innerHTML =
                'Please enter country name with letters only';
        } else {
            country2.nextElementSibling.innerHTML = '';
        }

        if (
            fname2.nextElementSibling.innerHTML === '' &&
            lname2.nextElementSibling.innerHTML === '' &&
            email2.nextElementSibling.innerHTML === '' &&
            phone2.nextElementSibling.innerHTML === '' &&
            country2.nextElementSibling.innerHTML === ''
        ) {
            // Create and append the "Thanks for applying!" message
            let message = document.createElement('hello');
            message.textContent = 'Thanks for applying! We will be back with you soon ';
            document.querySelector('#confirmation2').appendChild(message);
    
            openModal(); // Open modal only when all validations pass
        } else {
            closeModal(); // Close modal if there are validation errors
        }
    
    }

    // Reset form
    function resetForm() {
        // Clear values in form fields
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('email_address').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('country').value = '';

        // Clear error messages
        document.querySelector('#fname').nextElementSibling.innerHTML = '';
        document.querySelector('#lname').nextElementSibling.innerHTML = '';
        document.querySelector('#email_address').nextElementSibling.innerHTML = '';
        document.querySelector('#phone').nextElementSibling.innerHTML = '';
        document.querySelector('#country').nextElementSibling.innerHTML = '';
    }

    
    }
);
function toggleChat() {
    const chatPopup = document.getElementById("chat-popup");
    chatPopup.style.display = (chatPopup.style.display === "none") ? "block" : "none";
}

function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();

    if (message !== "") {
        // Display the message in the chat window
        const chatContent = document.getElementById("chat-content");
        chatContent.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

        // Clear the input field
        messageInput.value = "";
    }};