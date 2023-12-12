
//Program screen
//Section 1 ------------  declare an array of images (khai báo 1 mảng hình ảnh)
let myImagesArray = [
  './images/academic-vy-1.jpg',
  './images/academic-vy-2.jpg',
  './images/academic-vy-3.jpg',
  './images/academic-vy-4.jpg',
  './images/academic-vy-5.jpeg',
  './images/academic-vy-7.jpeg',
  './images/academic-vy-6.jpg',
  './images/academic-vy-4.jpg',
];

  //slideshow
  let ImageNumber = 0; //a variable to track the current position of an image (theo dõi vị trí hiện tại của ảnh)
  let difference = myImagesArray.length - 1; //The purpose of this variable is to represent the maximum index of the array.

  let delay = 1000; //milliseconds    1sec=1000milliseconds time interval between image changes

  setInterval('ChangeImages(1)', delay); //change image orientation and update image source in HTML.
  //-1 to show the slide backwards
  //1 to show the slide forwards

  function ChangeImages(direction) { //direction: allows for dynamic control of the image transition

  ImageNumber = ImageNumber + direction; //Increase or decrease the value of ImageNumber depending on the value of direction passed.
  //a negative value difference = -1 - move backward.
  //a positive value difference = 1 - the slideshow should move forward

  if (ImageNumber > difference) { //Exceeding the index of the last image in the array, the function will return to the first image
    //begin inner first if
    ImageNumber = 0;
  } 

  if (ImageNumber < 0) { //Exceeds the index of the first image in the array, the function will return to the last image
    //begin inner second if
    ImageNumber = difference;
  } 
  //Update the source of the HTML element with id 'slideshow' to display the new image
  document.getElementById('slideshow').src = myImagesArray[ImageNumber];
} 

//Table - a function to dynamically create and populate an HTML table with the information
// An array of objects representing different academic programs.
const programs = [
{ code: '1001', name: 'Astronomy', description: 'Based on the study of celestial bodies such as stars, the moon, and planets.', credential: 'Certificate of Hogwarts', length: '2 semesters', location: 'North Campus' },
{ code: '1002', name: 'Ancient Runes', description: 'Study of ancient symbols and characters.', credential: 'Certificate of Hogwarts', length: '2 semesters', location: 'South Campus' },
{ code: '1003', name: 'Arithmancy', description: 'A form of magical mathematics.', credential: 'Certificate of Hogwarts', length: '3 semesters', location: 'Lakeshore Campus' },
{ code: '1004', name: 'Care of Magical Creatures', description: 'Learning how to care for and manage magical creatures.', credential: 'Certificate of Hogwarts', length: '4 semesters', location: 'Lakeshore Campus' },
{ code: '1005', name: 'Divination', description: 'Predicting the future through methods such as fortune-telling, tea leaf reading, and crystal balls.', credential: 'Certificate of Hogwarts', length: '3 semesters', location: 'North Campus' },
{ code: '1006', name: 'Defense Against the Dark Arts', description: 'A class that teaches how to protect oneself from dark magic and dark creatures.', credential: 'Certificate of Hogwarts', length: '2 semesters', location: 'South Campus' },
{ code: '1007', name: 'Herbology', description: 'Study of various plants and vegetation, including those that can be dangerous.', credential: 'Certificate of Hogwarts', length: '3 semesters', location: 'Lakeshore Campus' },
];

// Function is designed to dynamically generate and style the rows of an HTML table
function createTableRows() {
//Retrieve a reference to the HTML element with the id attribute set to 'thead-program'.
const thead = document.getElementById('thead-program');
//Retrieve a reference to the HTML element with the id attribute set to 'tbody-program'.
const tbody = document.getElementById('tbody-program');

// Set styles for the table body
tbody.style.borderCollapse = 'collapse';
tbody.style.backgroundColor = '#ffffff';

// Set styles for the table header
thead.style.backgroundColor = '#ef7521';
thead.style.color = '#ffffff';
thead.style.padding = '10px'; 
thead.style.height = '60px'; 
thead.style.border = '1px solid #dad9d9'; 

// Select all <th>-(table header cell) elements within the table header
const thElements = document.querySelectorAll('#thead-program th');

// Set the width of the third th element to 40%. using the index 2 (JavaScript uses zero-based indexing).
thElements[2].style.width = '40%'; 

//A loop over each element in the programs array.
//Dynamically creating rows (<tr>) and cells (<td>) for an HTML table 
//based on the data provided in the programs array
programs.forEach(program => {
  //Create a new table row <tr> element for each program in the array.
  const row = document.createElement('tr');
  //Assigns the class name 'tr-program' to the newly created table row. 
  row.className = 'tr-program'; //styling purposes.

  //Defines an array called columns that contains the keys of the properties in each program object
  const columns = ['code', 'name', 'description', 'credential', 'length', 'location'];

  //A loop over each column in the columns array. 
  columns.forEach(column => {
    //Creates a new table cell <td> element for each column in the columns array.
    const cell = document.createElement('td');
    //Sets the 'headers' attribute of the cell, linking it to the corresponding <th> element in the table header.
    cell.setAttribute('headers', `til_${column}`);
    //Sets the text content of the cell to the value of the current column in the program object.
    cell.textContent = program[column];

    // Add styles directly in JavaScript
    cell.style.border = '1px solid #dad9d9';
    cell.style.padding = '10px'; // Adjusted padding to 10px
    cell.style.height = '40px'; // Set height to 40px

    //Appends the newly created cell to the current row.
    row.appendChild(cell);
  });

  //Appends the newly created row to the current tbody.
  tbody.appendChild(row);
});
}

// an event listener setup to execute the createTableRows function when the HTML document has finished loading.
document.addEventListener('DOMContentLoaded', function () {
  createTableRows();
});




