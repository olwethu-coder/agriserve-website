// Contact form handling
function handleContactSubmit(event) {
    event.preventDefault();
    alert('Thank you for contacting AgriServe Consulting. We will respond within 24 hours.');
    event.target.reset();
}

// Pricing calculator for retainer packages
function calculateRetainer(tier) {
    const baseFee = 40000; // R40,000 minimum retainer
    
    let total = baseFee;
    if (tier === 'Tier II') total = baseFee + 15000;
    if (tier === 'Tier III') total = baseFee + 35000;
    
    return total;
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
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
});

// Make functions available globally
window.calculateRetainer = calculateRetainer;