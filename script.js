function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu?.classList.toggle("open");
    icon?.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    
    const elementsToToggle = [
        document.body,
        document.querySelector('.shadow-overlay'),
        document.querySelector('.resume'),
        document.querySelector('.linkedin-dark-mode'),
        document.querySelector('.linkedin2-dark-mode'),
        document.querySelector('.email-dark-mode'),
        document.querySelector('.x-dark-mode')
    ].filter(Boolean);

    function toggleClasses(toggleElement, ...elements) {
        const isCurrentlyBright = toggleElement.classList.contains('bi-brightness-high-fill');
        toggleElement.classList.toggle('bi-brightness-high-fill', !isCurrentlyBright);
        toggleElement.classList.toggle('bi-moon', isCurrentlyBright);

        elements.forEach(element => {
            element.classList.toggle('light-mode', isCurrentlyBright);
        });
    }

    function setupToggleListeners() {
        const desktopToggle = document.getElementById('toggle-dark');
        const mobileToggle = document.getElementById('moblie-toggle-dark');

        if (desktopToggle) {
            desktopToggle.addEventListener('click', function () {
                toggleClasses(this, ...elementsToToggle);
            });
        } else {
            console.log("Desktop toggle NOT found.");
        }

        if (mobileToggle) {
            mobileToggle.addEventListener('click', function () {
                toggleClasses(this, ...elementsToToggle);
            });
        }
    }

    setupToggleListeners();

    // Scroll button toggle
    function toggleGoUpButton() {
        const goUpButton = document.querySelector(".go-up");
        if (!goUpButton) return;

        goUpButton.classList.toggle("visible", window.scrollY > 0);
    }

    window.addEventListener("scroll", toggleGoUpButton);
    toggleGoUpButton();
});


function go_up() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}