document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Close all items
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.display = 'none';
                i.querySelector('i').style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                item.classList.add('active');
                item.querySelector('.faq-answer').style.display = 'block';
                item.querySelector('i').style.transform = 'rotate(180deg)';
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.padding = '15px 0';
        }
    });

    // Form Submission Placeholder
    const form = document.getElementById('partnership-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'SENDING...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your interest! Our team will contact you shortly.');
                btn.innerText = originalText;
                btn.disabled = false;
                form.reset();
            }, 1500);
        });
    }
});
