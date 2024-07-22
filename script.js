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
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggleButton.textContent = '🌕'; // Yellow moon emoji for light mode
        toggleButton.style.color = 'yellow';
        localStorage.setItem('darkMode', 'disabled');
    }
}

function loadDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    const body = document.body;
    const toggleButton = document.getElementById('dark-mode-toggle');

    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.textContent = '🌑'; // Black moon emoji for dark mode
        toggleButton.style.color = 'black';
    } else {
        body.classList.remove('dark-mode');
        toggleButton.textContent = '🌕'; // Yellow moon emoji for light mode
        toggleButton.style.color = 'yellow';
    }
}

// Load dark mode state on page load
document.addEventListener('DOMContentLoaded', loadDarkMode);
