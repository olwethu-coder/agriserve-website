// Create particles for background animation
function createParticles() {
    // Remove existing particles first
    document.querySelectorAll('.particle').forEach(p => p.remove());
    
    // Create 20 new particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Randomize particle properties
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 5;
        const color = Math.random() > 0.5 ? '#8DC63F' : '#C55A11';
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.background = color;
        particle.style.animationDelay = delay + 's';
        particle.style.animationDuration = duration + 's';
        
        document.body.appendChild(particle);
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Contact form handling
function handleContactSubmit(event) {
    event.preventDefault();
    alert('Thank you for contacting AgriServe Consulting. We will respond within 24 hours.');
    event.target.reset();
}

// Pricing calculator for retainer packages
function calculateRetainer(tier) {
    const baseFee = 40000;
    
    let total = baseFee;
    if (tier === 'Tier II') total = baseFee + 15000;
    if (tier === 'Tier III') total = baseFee + 35000;
    
    return total;
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    createParticles();
    
    // Set up contact form if it exists
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Observe all elements with scroll animation
    document.querySelectorAll('.feature-card, .service-card, .team-card, .about-text, .about-mission, .contact-wrapper').forEach(el => {
        observer.observe(el);
    });
    
    // Remove typing animation border after it completes
    const typingElement = document.querySelector('.hero p');
    if (typingElement) {
        setTimeout(() => {
            typingElement.style.borderRight = 'none';
        }, 4000); // Matches the typing animation duration
    }
});

// Make functions available globally
window.calculateRetainer = calculateRetainer;

// Regenerate particles on window resize
window.addEventListener('resize', createParticles);