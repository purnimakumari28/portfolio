function toggleMenu() {
    const hamburgerMenu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    hamburgerMenu.classList.toggle('open');
    icon.classList.toggle('open');
}