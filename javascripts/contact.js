
//CONTACT PAGE
// This code defines an event handler function named toggle for the click event on each h4 element.
const toggle = (evt) => {
  //console.log('da vao function');
  //console.log(evt.currentTarget);
  const h4Elements = evt.currentTarget; // get the clicked h4 element
  const divElement = h4Elements.nextElementSibling; // get h4's sibling div

  //It toggles the 'minus' class on the clicked h4 element and the 'open' class on its next sibling div element.
  h4Elements.classList.toggle('minus');
  divElement.classList.toggle('open');

  //prevents the default action of the h4 tag's <a> tag, ensuring that clicking the h4 does not trigger navigation.
  evt.preventDefault(); // cancel default action of h4 tag's <a> tag
};

//Waiting for the DOM content to be fully loaded before executing the provided callback function.
document.addEventListener('DOMContentLoaded', () => {
  // Selects all h4 elements within an element with the ID 'faqs'.
  const h4Elements = document.querySelectorAll('#faqs h4');
  // attach event handler for each h4 tag
  if (h4Elements.length > 0) {
    // attach event handler for each h4 tag, making them clickable.
    for (let h4Element of h4Elements) {
      h4Element.addEventListener('click', toggle);
    }
    // set focus on first h4 tag's <a> tag
    h4Elements[0].focus();
  }

  //call search function 
  //Attaches a click event listener to an element with the ID 'search', 
  //triggering the processSearch function when clicked. 
 // $('#search').addEventListener('click', (event) => {
    //event.preventDefault(); // Prevent the default form submission behavior
   // processSearch();
 // });
  $('#search').addEventListener('click', processSearch);
});

//This function is a shorthand for selecting a DOM element by its CSS selector.
const $ = (selector) => document.querySelector(selector);

//This function is called when the search button is clicked.
const processSearch = (event) => {

  event.preventDefault();
  // get form controls to check for validity
  const department = $('#department');
  const campus = $('#campus');

  // Clear previous error messages
  department.nextElementSibling.textContent = '';
  campus.nextElementSibling.textContent = '';
  
  // check user entries for validity, showing error messages if needed.
  let isValid = true;
  if (department.value == '') {
    department.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    department.nextElementSibling.textContent = '';
  }

  if (campus.value == '') {
    campus.nextElementSibling.textContent = 'Please select a campus.';
    isValid = false;
  } else {
    $('#campus').nextElementSibling.textContent = '';
  }
  // submit the form if all fields are valid
  /*checks if all fields in the form are valid, If they are valid, an alert dialog is displayed 
  with the information contained in the message.*/
  if (isValid == true) {
   //$('form').submit();
   //console.log('campus',campus.value);
   window.location.href = `./confirm.html?department=${encodeURIComponent(department.value)}&campus=${encodeURIComponent(campus.value)}`;
  }
};