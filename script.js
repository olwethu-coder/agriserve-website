// Main JavaScript
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
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
    
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }
    
    // ===== BACK TO TOP BUTTON =====
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // ===== CONTACT FORM HANDLING =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // FormSubmit handles the submission, we just show a success message
        contactForm.addEventListener('submit', function(e) {
            // The actual submission is handled by FormSubmit
            // This just ensures the form doesn't double-submit
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