function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to handle toggling classes
function toggleClasses(toggleElement, ...elements) {
    toggleElement.classList.toggle('bi-moon');
    const isBrightMode = toggleElement.classList.contains('bi-brightness-high-fill');

    if (isBrightMode) {
        elements.forEach(element => {
            element.classList.add('light-mode');
        });
        document.body.classList.add('light-mode');
    } else {
        elements.forEach(element => {
            element.classList.remove('light-mode');
        });
        document.body.classList.remove('light-mode');
    }
    toggleElement.classList.toggle('bi-brightness-high-fill');
}

const menuToggle = document.getElementById('toggle-dark');
const shadowOverlay = document.querySelector('.shadow-overlay');
const linkedin = document.querySelector('.linkedin-dark-mode');
const linkedin2 = document.querySelector('.linkedin2-dark-mode');
const github = document.querySelector('.github-dark-mode');
const email = document.querySelector('.email-dark-mode');
const x = document.querySelector('.x-dark-mode');

menuToggle.addEventListener('click', function () {
    toggleClasses(this, document.body, shadowOverlay, linkedin,linkedin2, github, email, x);
});

