const toggle1 = (evt) => {

  evt.preventDefault();

  // find .main-2 
  const container = evt.currentTarget.closest('.main-2');
  
  // switch .toggle elements class
  if (container) {
    const textElement = container.querySelector('.toggle1');
    if (textElement) {
      textElement.classList.toggle('open');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const main2Elements = document.querySelectorAll('.main-2');

  for (let element of main2Elements) {
    // bond subelements to event
    const children = element.children;
    for (let child of children) { // 
      if (child.tagName === 'IMG') { // special handle img
        child.addEventListener('click', (evt) => {
          toggle1(evt);
        });
      } else {
        child.addEventListener('click', toggle1);
      }
  }
}
});
