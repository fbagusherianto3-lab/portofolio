        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const menu = document.querySelector('.menu');
        const menuLinks = document.querySelectorAll('.menu a');

        hamburgerMenu.addEventListener('click', () => {
            menu.classList.toggle('tampil');
            hamburgerMenu.classList.toggle('active');
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('tampil');
                hamburgerMenu.classList.remove('active');
            });
        });