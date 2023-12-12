'use strict';

// Function to select an element by CSS selector.
const $ = (selector) => document.querySelector(selector);

// Function to handle the form submission.
const processEntries = () => {
  // Getting the input elements from the form.
  const bookTitle = $('#book_title');
  const bookId = $('#bookid');
  const author = $('#author');
  const publisher = $('#publisher');
  const category = $('#category');
  const course = $('#course');
  const department = $('#department');
  const term = $('#term');

  // Variable to track if the form is valid.
  let isValid = true;

  // Check if book title is entered and update error message accordingly.
  if (bookTitle.value.trim() === '') {
    $('#book_title_error').textContent = 'Book title is required.';
    isValid = false;
  } else {
    $('#book_title_error').textContent = '';
  }

  // Check if book ID is entered and update error message accordingly.
  if (bookId.value.trim() === '') {
    $('#bookid_error').textContent = 'Book ID is required.';
    isValid = false;
  } else {
    $('#bookid_error').textContent = '';
  }

  // Check if author is entered and update error message accordingly.
  if (author.value.trim() === '') {
    $('#author_error').textContent = 'Author is required.';
    isValid = false;
  } else {
    $('#author_error').textContent = '';
  }

  // Check if publisher is entered and update error message accordingly.
  if (publisher.value.trim() === '') {
    $('#publisher_error').textContent = 'Publisher is required.';
    isValid = false;
  } else {
    $('#publisher_error').textContent = '';
  }

 

  // If all fields are valid, display a random message.

if (isValid) {
  const messages = ["The book you searched for does not exist", "Go away, Muggle", "Restricted area of the library, no access"];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}

};

// Setting up the event listener for the DOMContentLoaded event.
document.addEventListener('DOMContentLoaded', () => {
  // Attaching a click event listener to the search button.
  $('#search').addEventListener('click', processEntries);

  // Setting focus to the first input element.
  $('#book_title').focus();
});
