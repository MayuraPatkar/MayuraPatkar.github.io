function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    menu.innerHTML = `<li><a href="#Education" onclick="toggleMenu()">Education</a></li>
            <li><a href="#Skills" onclick="toggleMenu()">Skills</a></li>
            <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
            <li><a href="#Achievements" onclick="toggleMenu()">Achievements</a></li>
            <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
            <div class="moblie-toggle-mode">
                <a>Dark</a>
                <i class="bi bi-brightness-high-fill" id="moblie-toggle-dark"></i>
            </div>`;
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
// const menuToggle_ = document.getElementById('moblie-toggle-dark');
// const shadowOverlay_ = document.querySelector('.shadow-overlay');

// menuToggle_.addEventListener('click', function () {
//     toggleClasses(this, shadowOverlay_);
// });


function github() {
    window.open("https://github.com/Mayur68", "_blank");
}

function linkedin() {
    window.open("https://www.linkedin.com/in/mayura-patkar-14306a2b1/", "_blank");
}

window.addEventListener('scroll', function () {
    var introText = document.querySelector('.intro-text');
    var aboutText = document.querySelector('.about-text');
    var introPosition = introText.getBoundingClientRect().top;
    var aboutPosition = aboutText.getBoundingClientRect().top;

    if (introPosition <= 0) {
        introText.style.top = '-100%';
        aboutText.style.top = '0';
    } else {
        introText.style.top = '0';
        aboutText.style.top = '100vh';
    }
});
