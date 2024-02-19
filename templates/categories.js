document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for category links
    const categoryLinks = document.querySelectorAll('.categories-list a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Toggle functionality for product lists
    const categoryHeaders = document.querySelectorAll('.category h3');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const productList = header.nextElementSibling;
            productList.classList.toggle('show');
        });
    });
});
