function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const elementsToToggle = [
    document.body,
    document.querySelector('.shadow-overlay'),
    document.querySelector('.resume'),
    document.querySelector('.linkedin-dark-mode'),
    document.querySelector('.linkedin2-dark-mode'),
    document.querySelector('.email-dark-mode'),
    document.querySelector('.x-dark-mode')
];

function screenSizeHandler(matches) {
    if (matches) {
        const menuToggleMobile = document.getElementById('mobile-toggle-dark');
        menuToggleMobile.addEventListener('click', function () {
            toggleClasses(this, ...elementsToToggle);
        });
    }
}

const mediaQuery = window.matchMedia('(max-width: 1200px)');
screenSizeHandler(mediaQuery.matches);
mediaQuery.addListener(screenSizeHandler);

function toggleClasses(toggleElement, ...elements) {
    toggleElement.classList.toggle('bi-moon');
    const isBrightMode = toggleElement.classList.contains('bi-brightness-high-fill');

    elements.forEach(element => {
        element.classList.toggle('light-mode', isBrightMode);
    });

    document.body.classList.toggle('light-mode', isBrightMode);
    toggleElement.classList.toggle('bi-brightness-high-fill', !isBrightMode);
}

const menuToggle = document.getElementById('toggle-dark');

menuToggle.addEventListener('click', function () {
    toggleClasses(this, ...elementsToToggle);
});

function go_up() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleGoUpButton() {
    var goUpButton = document.querySelector(".go-up");
    if (window.scrollY > 0) {
        goUpButton.classList.add("visible");
    } else {
        goUpButton.classList.remove("visible");
    }
}

window.addEventListener("scroll", toggleGoUpButton);

toggleGoUpButton();
