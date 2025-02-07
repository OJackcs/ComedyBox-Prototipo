// Selecionando elementos do DOM
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

// Menu mobile - abrir
menuOpen.addEventListener('click', () => {
    sidebar.style.left = '0';
    sidebar.style.transition = 'left 0.3s ease';
});

// Menu mobile - fechar
menuClose.addEventListener('click', () => {
    sidebar.style.left = '-100%';
    sidebar.style.transition = 'left 0.3s ease';
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    const isSmallScreen = window.innerWidth <= 992;
    if (isSmallScreen && 
        !sidebar.contains(e.target) && 
        !menuOpen.contains(e.target) &&
        sidebar.style.left === '0px') {
        sidebar.style.left = '-100%';
    }
});

// Ajustar sidebar ao redimensionar a tela
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-100%';
    }
});

// Prevenir transição da sidebar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 992) {
        sidebar.style.left = '-100%';
    }
});