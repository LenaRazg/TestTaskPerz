        const listItems = document.querySelectorAll('.info-container__list-name-li');

        listItems.forEach(item => {
            item.addEventListener('click', function () {

                listItems.forEach(el => el.classList.remove('active'));

                this.classList.add('active');
            });
        });
