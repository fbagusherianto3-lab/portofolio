const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

if (hamburgerMenu && menu) {
    const closeMenu = () => {
        menu.classList.remove('tampil');
        hamburgerMenu.classList.remove('active');
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        hamburgerMenu.setAttribute('aria-label', 'Buka menu');
    };

    hamburgerMenu.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('tampil');
        hamburgerMenu.classList.toggle('active', isOpen);
        hamburgerMenu.setAttribute('aria-expanded', String(isOpen));
        hamburgerMenu.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menu.classList.contains('tampil')) {
            closeMenu();
            hamburgerMenu.focus();
        }
    });
}