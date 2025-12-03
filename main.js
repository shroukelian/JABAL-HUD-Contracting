// main.js - FINAL VERSION WITH AOS and Mobile Navigation

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. AOS (Animate On Scroll) Initialization
    AOS.init({
        // Global settings:
        duration: 1100,   // Animation duration in milliseconds
        once: false,       // Whether animation should happen only once - true
        mirror: true,    // Whether elements should animate out while scrolling past them - false
    });


    // ==========================================================
    // 2. Mobile Menu Toggle (Hamburger Menu)
    // ==========================================================
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.main-nav-wrapper');

    if (hamburger && navWrapper) {
        hamburger.addEventListener('click', () => {
            navWrapper.classList.toggle('is-open');
            hamburger.classList.toggle('is-active');
            
            // Optional: Prevent body scrolling when menu is open
            // document.body.classList.toggle('no-scroll');
        });
        
        // Optional: Close menu when a link is clicked (for single-page navigation)
        const navLinks = navWrapper.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Check if the screen is mobile size before closing
                if (window.innerWidth <= 992) {
                    navWrapper.classList.remove('is-open');
                    hamburger.classList.remove('is-active');
                    // document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    // ==========================================================
    // 3. (Optional) Smooth Scroll for Anchor Links
    // ==========================================================
    // This function ensures smooth scrolling when clicking on anchor links (e.g., #section)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // ==========================================================
    // 4. (Optional) Footer Current Year
    // ==========================================================
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});