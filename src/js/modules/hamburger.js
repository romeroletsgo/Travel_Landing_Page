const hamburger = () => {
    const menu = document.querySelector('.header__nav-list'),
        menuItem = document.querySelectorAll('.header__nav-item'),
        hamburger = document.querySelector('.hamburger');

    menu.addEventListener('click', (e) => {
        if (e.target === menu) {
            document.body.style.overflow = "hidden";
        } 
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__nav-list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__nav-list_active');
        })
    })
}

export default hamburger;