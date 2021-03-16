const hamburger = () => {
    const menu = document.querySelector('.header__nav-list'),
        menuItem = document.querySelectorAll('.header__nav-item'),
        hamburger = document.querySelector('.hamburger'),
        body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__nav-list_active');
        body.classList.toggle('__lock');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__nav-list_active');
        })
    })
}

export default hamburger;