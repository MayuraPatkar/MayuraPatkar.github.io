function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to handle toggling classes
function toggleClasses(toggleElement, overlayElement) {
    toggleElement.classList.toggle('bi-moon');
    if (toggleElement.classList.contains('bi-brightness-high-fill')) {
        document.body.classList.add('light-mode');
        overlayElement.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
        overlayElement.classList.remove('light-mode');
    }
    toggleElement.classList.toggle('bi-brightness-high-fill');
}

// First event listener
const menuToggle = document.getElementById('toggle-dark');
const shadowOverlay = document.querySelector('.shadow-overlay');

menuToggle.addEventListener('click', function () {
    toggleClasses(this, shadowOverlay);
});

// Second event listener
const menuToggle_ = document.getElementById('moblie-toggle-dark');
const shadowOverlay_ = document.querySelector('.shadow-overlay');

menuToggle_.addEventListener('click', function () {
    toggleClasses(this, shadowOverlay_);
});


// function github() {
//     window.open("https://github.com/Mayur68", "_blank");
// }

// function linkedin() {
//     window.open("https://www.linkedin.com/in/mayura-patkar-14306a2b1/", "_blank");
// }
