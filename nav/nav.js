document.addEventListener('DOMContentLoaded', function() {
    const primaryNav = document.querySelector('.navbar');
    const navToggle = document.querySelector('.mobile-nav-toggle');
 
    navToggle.addEventListener('click', function() {
        const isVisible = primaryNav.style.transform === 'translateX(0%)';

        if (!isVisible) {
            primaryNav.style.transform = 'translateX(0%)';
            navToggle.setAttribute('aria-expanded', 'true');
        } else {
            primaryNav.style.transform = 'translateX(100%)';
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
})    