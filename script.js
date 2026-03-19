// Mobile-optimized JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if mobile device
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    // Navbar scroll effect - optimized for mobile
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('mainNavbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting AgriServe Consulting. We will respond within 24 hours.');
            this.reset();
        });
    }
    
    // Smooth scrolling - optimized for mobile
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
    
    // Touch-friendly flip card for mobile
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
    
    // Pricing calculator
    window.calculateRetainer = function(tier) {
        const baseFee = 40000;
        let total = baseFee;
        if (tier === 'Tier II') total = baseFee + 15000;
        if (tier === 'Tier III') total = baseFee + 35000;
        return total;
    };
    
    // Remove typing animation border after it completes
    const typingElement = document.querySelector('.hero p');
    if (typingElement) {
        setTimeout(() => {
            typingElement.style.borderRight = 'none';
        }, 4000);
    }
    
    // Lazy loading for images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }
});