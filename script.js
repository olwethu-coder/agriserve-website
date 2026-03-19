// Mobile-optimized JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if mobile device
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    }
    
    // ===== BACK TO TOP BUTTON =====
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }, { passive: true });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== NAVBAR SCROLL EFFECT =====
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('mainNavbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
    
    // ===== CONTACT FORM HANDLING =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting AgriServe Consulting. We will respond within 24 hours.');
            this.reset();
        });
    }
    
    // ===== SMOOTH SCROLLING =====
    if (!isMobile) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    } else {
        // Simple jump on mobile (faster)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'auto' });
                }
            });
        });
    }
    
    // ===== TOUCH-FRIENDLY FLIP CARD FOR MOBILE =====
    if (isMobile) {
        const flipCards = document.querySelectorAll('.flip-card');
        flipCards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg) rotateX(5deg)';
            });
            card.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.querySelector('.flip-card-inner').style.transform = '';
                }, 1000);
            });
        });
    }
    
    // ===== PRICING CALCULATOR =====
    window.calculateRetainer = function(tier) {
        const baseFee = 40000;
        let total = baseFee;
        if (tier === 'Tier II') total = baseFee + 15000;
        if (tier === 'Tier III') total = baseFee + 35000;
        return total;
    };
    
    // ===== REMOVE TYPING ANIMATION BORDER =====
    const typingElement = document.querySelector('.hero p');
    if (typingElement) {
        setTimeout(() => {
            typingElement.style.borderRight = 'none';
        }, 4000);
    }
    
    // ===== LAZY LOADING FOR IMAGES =====
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }
});