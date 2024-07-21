function toggleMenu() {
    const hamburgerMenu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    hamburgerMenu.classList.toggle('open');
    icon.classList.toggle('open');
}

function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.getElementById('dark-mode-toggle');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌑'; // Black moon emoji for dark mode
        toggleButton.style.color = 'black';
    } else {
        toggleButton.textContent = '🌕'; // Yellow moon emoji for light mode
        toggleButton.style.color = 'yellow';
    }
}
