document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.partners-container__icon-partners');
    const leftArrow = document.querySelector('.partners-container__left-right.left');
    const rightArrow = document.querySelector('.partners-container__left-right.right');

    // Функция для проверки видимости стрелок
    function updateArrowsVisibility() {
        if (container.scrollWidth <= container.clientWidth) {
            leftArrow.classList.add('hidden');
            rightArrow.classList.add('hidden');
        } else {
            leftArrow.classList.remove('hidden');
            rightArrow.classList.remove('hidden');
        }
    }

    updateArrowsVisibility();
    window.addEventListener('resize', updateArrowsVisibility);

    // Скролл перетаскиванием
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Скорость скролла
        container.scrollLeft = scrollLeft - walk;
    });

    // Скролл стрелками
    leftArrow.addEventListener('click', () => {
        container.scrollBy({
            left: -container.clientWidth,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        container.scrollBy({
            left: container.clientWidth,
            behavior: 'smooth'
        });
    });
});