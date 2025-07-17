// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Auto‑update footer year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle example
    const nav = document.querySelector('.site-nav');
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    if (nav && toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    // Handle contact form submit
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // TODO: wire up AJAX or form‑processing logic here
            alert('Thanks for your message! We’ll be in touch.');
            form.reset();
        });
    }
});