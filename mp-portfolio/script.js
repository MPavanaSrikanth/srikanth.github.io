document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Removed ---


    // --- Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const phrases = [
            "Product Operations Specialist",
            "AI Quality & Process Optimization",
            "Ex-Google Trust & Safety",
            "Microsoft Copilot & MSN SME"
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 50;

        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 30; // Faster deleting
            } else {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 80; // Normal typing
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typeSpeed = 1500; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500; // Pause before new phrase
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }

    // --- Navbar Scroll Effect Removed (Fixed Floating Pills) ---

    // --- Reveal on Scroll ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
    // --- Theme Toggle Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check local storage
    const savedTheme = localStorage.getItem('mps-theme');
    if (savedTheme === 'light') {
        enableLightMode();
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('light-mode')) {
                disableLightMode();
            } else {
                enableLightMode();
            }
        });
    }

    function enableLightMode() {
        body.classList.add('light-mode');
        localStorage.setItem('mps-theme', 'light');
        if (themeToggle) {
            themeToggle.innerHTML = '<i data-feather="sun"></i>';
            if (typeof feather !== 'undefined') feather.replace();
        }
    }

    function disableLightMode() {
        body.classList.remove('light-mode');
        localStorage.setItem('mps-theme', 'dark');
        if (themeToggle) {
            themeToggle.innerHTML = '<i data-feather="moon"></i>';
            if (typeof feather !== 'undefined') feather.replace();
        }
    }
});
