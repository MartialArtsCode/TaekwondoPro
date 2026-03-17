// 1. Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 2. Simple form success message (client-side only)
const trialForm = document.querySelector('.trial-form');
if (trialForm) {
    trialForm.addEventListener('submit', function(e) {
        // You can keep formsubmit.co backend — this is just visual feedback
        setTimeout(() => {
            alert("Thank you! We'll contact you shortly to schedule your free trial.");
        }, 800);
    });
}

// 3. Optional: Fade-in sections on scroll (progressive enhancement)
const fadeElements = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// Add this to CSS if you want the effect:
    /* .section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
    .section.fade-in {
        opacity: 1;
        transform: translateY(0);
    } */
