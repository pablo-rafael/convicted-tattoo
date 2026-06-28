const topBar = document.querySelector('.top-bar');

if (topBar) {
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY || window.pageYOffset;

        if (currentScroll > lastScrollTop && currentScroll > 80) {
            topBar.classList.add('is-hidden');
        } else {
            topBar.classList.remove('is-hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const topBar = document.querySelector(".top-bar");
    const navLinks = document.querySelectorAll(".nav-link");

    // Abre e fecha o menu ao clicar no botão hambúrguer
    menuToggle.addEventListener("click", () => {
        topBar.classList.toggle("menu-open");
    });

    // Fecha o menu automaticamente ao clicar em qualquer link (âncora)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            topBar.classList.remove("menu-open");
        });
    });
});

