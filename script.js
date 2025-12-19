/* ==========================================
   SYSTEM :: MAYURA_PATKAR
   SCRIPT :: CORE_LOGIC
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initBootSequence();
    initNavigation();
    initNeuralBackground();
    initGlitchEffects();
    initScrollAnimations();
});

/* === BOOT SEQUENCE === */
function initBootSequence() {
    const bootScreen = document.getElementById('boot-screen');
    const progressBar = document.querySelector('.progress-fill');
    const sysLog = document.querySelector('.sys-log');
    const interface = document.getElementById('interface');
    
    const logs = [
        "INITIALIZING KERNEL...",
        "LOADING NEURAL INTERFACE...",
        "MOUNTING FILE SYSTEM...",
        "CONNECTING TO MAIN FRAME...",
        "ACCESS GRANTED."
    ];

    let progress = 0;
    let logIndex = 0;

    // Simulate loading
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;

        // Add logs
        if (progress > (logIndex + 1) * 20 && logIndex < logs.length) {
            const p = document.createElement('p');
            p.textContent = `> ${logs[logIndex]}`;
            p.style.opacity = 1;
            sysLog.appendChild(p);
            logIndex++;
        }

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                bootScreen.style.opacity = 0;
                setTimeout(() => {
                    bootScreen.style.display = 'none';
                    interface.style.opacity = 1;
                    typeWriterEffect();
                }, 500);
            }, 800);
        }
    }, 100);
}

/* === NAVIGATION === */
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            navBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');

            // Special handling for Skills section to re-trigger animations
            if (targetId === 'skills') {
                const bars = targetSection.querySelectorAll('.lvl');
                bars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 50);
                });
            }
        });
    });
}

/* === TYPEWRITER EFFECT === */
function typeWriterEffect() {
    const elements = document.querySelectorAll('.typing-text');
    elements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, 20);
    });
}

/* === NEURAL BACKGROUND (CANVAS) === */
function initNeuralBackground() {
    const canvas = document.getElementById('neural-bg');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];
    
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.fillStyle = 'rgba(0, 255, 65, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
            
            // Connect particles
            particles.forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    ctx.strokeStyle = `rgba(0, 255, 65, ${0.1 - dist/1500})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

/* === GLITCH EFFECTS === */
function initGlitchEffects() {
    const glitchTexts = document.querySelectorAll('.glitch');
    
    glitchTexts.forEach(text => {
        text.addEventListener('mouseover', () => {
            text.setAttribute('data-text', text.textContent);
        });
    });
}

/* === SCROLL ANIMATIONS === */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll('.timeline-item, .cert-chip, .cyber-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}
