document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll('.info-container__list-name-li');
    const infoBox = document.querySelector('.info-container__info-box samp');
    const phone = document.querySelector('.info-container__position-phone');
    let activeIndex = 1;

    const descriptions = [
        "Описание для избранного...",
        "Вы всегда получите полную информацию об акции: подробное описание, бренд, магазины и торговые центры где походит акция. Также доступна возможность сразу перейти на сайт товара и купить в рамках действующей акции.",
        "Описание для подписок...",
        "Описание для карты...",
        "Описание для моей ленты..."
    ];

    function setActiveItem(newIndex) {
        if (newIndex === activeIndex) return;
        
        const activeItem = document.querySelector('.info-container__list-name-li.active');
        const targetItem = listItems[newIndex];

        if (activeItem) {
            activeItem.classList.remove('active');
        }
        targetItem.classList.add('active');

        // Обновляем порядок элементов
        listItems.forEach(item => {
            let orderValue = parseInt(item.getAttribute('data-target'));
            if (orderValue === newIndex) {
                item.style.order = 1; // активный элемент
            } else if (orderValue < newIndex) {
                item.style.order = 0; // элементы слева
            } else {
                item.style.order = 2; // элементы справа
            }
        });

        // Обновляем описание
        infoBox.classList.add('hidden');
        setTimeout(() => {
            infoBox.innerHTML = descriptions[newIndex];
            infoBox.classList.remove('hidden');
        }, 300);

        activeIndex = newIndex;
    }

    listItems.forEach((item, index) => {
        item.addEventListener('click', () => setActiveItem(index));
    });

    // Начальная настройка
    setActiveItem(1); // Устанавливаем начальный активный элемент на тот, у которого data-target="1"

    // Функциональность свайпа
    let touchstartX = 0;
    let touchendX = 0;

    function handleSwipe() {
        if (touchendX < touchstartX) {
            if (activeIndex < listItems.length - 1) setActiveItem(activeIndex + 1);
        }
        if (touchendX > touchstartX) {
            if (activeIndex > 0) setActiveItem(activeIndex - 1);
        }
    }

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    });
});