document.addEventListener("DOMContentLoaded", function() {
    const partnerItems = document.querySelectorAll('.partners-container__partner-item');

    partnerItems.forEach(item => {
        const img = item.querySelector('img');
        const originalSrc = img.src;
        const altSrc = img.getAttribute('data-alt-src');

        item.addEventListener('mouseenter', () => {
            img.src = altSrc;
        });

        item.addEventListener('mouseleave', () => {
            img.src = originalSrc;
        });
    });
});
