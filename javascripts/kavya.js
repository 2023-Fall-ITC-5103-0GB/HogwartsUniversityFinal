
function flipImageOnHover() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('no-flip');
        });

        card.addEventListener('mouseout', () => {
            card.classList.remove('no-flip');
        });
    });
}
function handleDropdownMenu() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    flipImageOnHover();
    handleDropdownMenu();
});

